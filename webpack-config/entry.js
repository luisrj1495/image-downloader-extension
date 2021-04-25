const path = require("path");

module.exports = () => {
  return {
    "image-page": path.resolve(__dirname, "../src/content-script/image-page/index.ts"),
    "browser-action": path.resolve(__dirname, "../src/background/browserAction/index.tsx")
  };
};
