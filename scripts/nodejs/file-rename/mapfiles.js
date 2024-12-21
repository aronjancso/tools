const fs = require("fs");
const path = require("path");

const directory = __dirname;
const outputFilePath = path.join(directory, "map.js");

const files = fs.readdirSync(directory);
const filteredFiles = files.filter(
  (file) => file !== path.basename(__filename)
);

const fileRenameMap = {};
filteredFiles.forEach((file) => {
  fileRenameMap[file] = file;
});

const outputContent = `const fileRenameMap = ${JSON.stringify(
  fileRenameMap,
  null,
  2
)};

module.exports = fileRenameMap;`;

fs.writeFileSync(outputFilePath, outputContent, "utf8");
