const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const convertFiles2Array = async (dir) => {
  const result = [];
  try {
    const targetDir = path.join(__dirname, dir);
    const { isDirectory } = await stat(targetDir);

    if (!isDirectory) {
      return result;
    }

    const files = await readdir(targetDir);

    if (files.length === 0) {
      return result;
    }

    for (let i = 0; i < files.length; i++) {
      const file = path.join(__dirname, dir, files[i]);
      const content = await readFile(file, { encoding: "utf8" });
      const json = JSON.parse(content);
      result.push(json);
    }
  } catch (err) {
    console.log(err);
  } finally {
    return result.sort((a, b) => {
      if (a.timestamp > b.timestamp) {
        return 1;
      }

      if (a.timestamp < b.timestamp) {
        return -1;
      }

      return 0;
    });
  }
};

const DIR = "json";
convertFiles2Array(DIR).then(console.log);
