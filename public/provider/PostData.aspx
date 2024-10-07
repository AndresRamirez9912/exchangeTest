<%@ Page Language="C#" AutoEventWireup="true" CodeFile="PostData.aspx.cs" Inherits="CallbackWebApp.PostData" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Post Data</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Label runat="server">Token</asp:Label> <asp:TextBox ID="Token" runat="server"></asp:TextBox><br/>
            <asp:Label runat="server">scanReference</asp:Label> <asp:TextBox ID="scanReference" runat="server"></asp:TextBox><br/>
            <asp:Label runat="server">verificationStatus</asp:Label> <asp:TextBox ID="verificationStatus" runat="server"></asp:TextBox><br/>
            <asp:Label runat="server">customerId</asp:Label> <asp:TextBox ID="customerId" runat="server"></asp:TextBox>
            <asp:Button ID="Submit" runat="server" Text="Submit" />
        </div>
    </form>
</body>
</html>