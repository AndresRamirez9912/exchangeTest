const fs = require("fs-extra");
const shell = require("shelljs");
const path = require("path");

const localPotPath = path.join("locales", "template.pot");
const buildPotPath = path.join("build", "static", "app.pot");

const copyClientScriptsToBuild = fileName => fs.copySync(
  path.join("scripts", "client-scripts", fileName),
  path.join("build", fileName)
);

function init() {
  try {

    shell.exec("node scripts/extractTranslations.js");

    // Pre-flight babelify problematic directories.
    [
      "./node_modules/multicoin-address-validator",
      "./node_modules/crc"
    ].forEach(file => {
      shell.exec(`cross-env NODE_ENV=production ./node_modules/.bin/babel ${file} -d ${file}`);
    });

    shell.exec("npm run react-scripts-build");

    fs.copySync(localPotPath, buildPotPath);
    copyClientScriptsToBuild("package.json");
    copyClientScriptsToBuild("service-worker.js");

    fs.ensureFileSync(path.join("build", "local", "translation", "translations.js"));

  } catch (err) {
    console.error(err);
  }
}

init();
