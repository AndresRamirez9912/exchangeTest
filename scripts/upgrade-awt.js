const shell = require("shelljs");
const path = require("path");

const localStaticPath = path.join("build", "static");
const buildStaticPath = path.join("..", "apex-web-tools", "static");

function init() {
  try {
    shell.exec("npm run build-static");
    shell.rm('-rf', buildStaticPath);
    shell.cp('-R', localStaticPath, buildStaticPath);
  } catch (err) {
    console.error(err);
  }
}

init();
