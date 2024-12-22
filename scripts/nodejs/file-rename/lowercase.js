const fs = require("fs");
const path = require("path");

const directory = __dirname;
const files = fs.readdirSync(directory);
const filteredFiles = files.filter(
  (file) => file !== path.basename(__filename)
);

filteredFiles.forEach((file) => {
  const lowercaseName = file.toLowerCase();
  const originalPath = path.join(directory, file);
  const newPath = path.join(directory, lowercaseName);

  if (originalPath !== newPath) {
    try {
      fs.renameSync(originalPath, newPath);
      console.log(`✅ ${file} -> ${lowercaseName}`);
    } catch (err) {
      console.error(`❌ ${file} -> ${lowercaseName}`);
    }
  }
});
