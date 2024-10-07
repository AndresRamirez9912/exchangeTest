const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'package.json');
const jsonString = fs.readFileSync(jsonPath, 'utf8');
const packageJson = JSON.parse(jsonString);

const buildPathAndName = path.join(__dirname, '..', 'build', 'static', 'version.txt');

fs.writeFile(buildPathAndName, (
`${packageJson.name} version: ${packageJson.version}
apex-web version: ${packageJson.dependencies['apex-web']}`
), function(err) {
    if(err) {
      console.err('error when attempting to write version.txt: ')
        return console.log(err);
    }

    console.log("version.txt was saved to the build folder");
});
