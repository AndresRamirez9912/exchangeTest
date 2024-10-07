const fs = require('fs');

// sync version
function walkSync(currentDirPath, callback) {
  const fs = require('fs'),
    path = require('path');
  fs.readdirSync(currentDirPath).forEach(function (name) {
    const filePath = path.join(currentDirPath, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}


function init() {
  const util = require('util');
  const urlsFilePath = '../src/config/files.json';
  let obj = { files: [] };

  walkSync('../src/config', (filePath, stat) => {
    const fileParts = filePath.split('/');
    const fileName = fileParts[fileParts.length - 1];

    obj.files.push(fileName);
  });

  fs.writeFileSync(urlsFilePath, JSON.stringify(obj, null, 2) , 'utf-8')
}

init();
