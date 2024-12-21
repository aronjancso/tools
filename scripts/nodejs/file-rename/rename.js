const fs = require("fs");
const path = require("path");
const map = require("./map");

const directory = __dirname;

for (const [originalName, newName] of Object.entries(map)) {
  const originalPath = path.join(directory, originalName);
  const newPath = path.join(directory, newName);

  if (fs.existsSync(originalPath)) {
    try {
      fs.renameSync(originalPath, newPath);
      console.log(`✅ ${originalName} -> ${newName}`);
    } catch (error) {
      console.error(`❌ ${originalName} -> ${newName}`);
    }
  } else {
    console.warn(`⭕ ${originalName} cannot be found`);
  }
}
