using System;
using System.Collections.Specialized;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;

namespace CallbackWebApp
{
    public partial class PostData : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var queryString = System.Web.HttpUtility.ParseQueryString(string.Empty);

            foreach (var key in Request.Form.AllKeys)
            {
                if (string.IsNullOrEmpty(Request.Form[key])) continue;
                switch (key.ToLower())
                {
                    case "token":
                        // This is for Poli Pay
                        var url = ConfigurationManager.AppSettings["PoliPayCallback"];
                        SubmitToBackendWithData(url, "{\"Token\":\"" + Request.Form[key] + "\"}");
                        Response.Clear();
                        Response.CacheControl = "no-cache";
                        Response.ContentType = "application/json";
                        Response.Write("{\"Result\":\"Success\"}");
                        Response.End();
                        break;
                    case "scanreference":
                    case "jumioidscanreference":
                    case "verificationstatus":
                    case "customerid":
                        // This is for Jumio
                        var jumioUrl = ConfigurationManager.AppSettings["JumioCallback"];
                        SubmitToBackendWithData(jumioUrl, GenerateJsonData(Request.Form));
                        Response.Clear();
                        Response.CacheControl = "no-cache";
                        Response.ContentType = "application/json";
                        Response.Write("{\"Result\":\"Success\"}");
                        Response.End();
                        break;
                    default:
                        break;
                }
            }
        }

        private static string GenerateJsonData(NameValueCollection formData)
        {
            var json = String.Join("&",
                formData.AllKeys.Select(a => HttpUtility.UrlEncode(a) + "=" + HttpUtility.UrlEncode(formData[a])));
            return json;
        }

        private static void SubmitToBackendWithData(string url, string json)
        {
            var httpWebRequest = (HttpWebRequest)WebRequest.Create(url);
            httpWebRequest.ContentType = "application/json";
            httpWebRequest.Method = "POST";

            using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
            {
                streamWriter.Write(json);
                streamWriter.Flush();
                streamWriter.Close();
            }

            var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
                if (!result.Equals("\"OK\""))
                {
                    // We had an error
                }
            }
        }
    }
}