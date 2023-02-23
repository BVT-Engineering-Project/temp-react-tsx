const fs = require("fs");
const path = require("path");

const nextPkgJson = JSON.parse(
  // Use `fs` to avoid caching `package.json`.
  fs.readFileSync(require.resolve("next/package.json")).toString("utf8")
);

const relativeBinPath = nextPkgJson.bin.next;

const absoluteBinPath = path.resolve(
  // `require.resolve('next')` resolves to `dist/server/next.js`
  // which is not what we want.
  // Instead, we will resolve `package.json` and find the folder it's in.
  path.dirname(require.resolve("next/package.json")),
  relativeBinPath
);

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

process.argv.push("-p", process.env.APP_PORT || "3000");

// Launch Next CLI.
require(absoluteBinPath);
