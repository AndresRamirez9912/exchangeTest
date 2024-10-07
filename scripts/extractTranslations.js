#!/usr/bin/env node

const fs = require('fs');
const shell = require('shelljs');
const path = require('path');

const tempFile = path.join('src', 'KYCTextValues.js');
const apexWebTranslations = fs.readFileSync(
  path.join("node_modules", "apex-web", "lib", "locales", "template.pot"),
  "utf8"
);

try {
  // createTempFileForKYCTextValues();

  shell.exec('npm run extract');
  fs.appendFileSync(
    path.join("locales", "template.pot"),
    apexWebTranslations
  );
} finally {
  // fs.unlinkSync(tempFile);
}

function createTempFileForKYCTextValues() {
  const configPath = path.join('src', 'config', 'config.json');
  const data = fs.readFileSync(configPath, 'utf8');
  const kyc = JSON.parse(data).KYC;

  const stringsFromKyc = extractStrings(kyc);

  const result = [...stringsFromKyc].map(element => {
    return `// context.t('${element}')`;
  });

  fs.writeFileSync(tempFile, result.join('\n'));
}

function extractStrings(obj) {
  const result = new Set();

  for (let key in obj) {
    const value = obj[key];

    if (typeof (value) === 'string') {
      result.add(value);
    }

    if (typeof (value) === 'object') {
      const values = extractStrings(value);
      values.forEach(element => {
        result.add(element);
      })
    }
  }

  return result;
}