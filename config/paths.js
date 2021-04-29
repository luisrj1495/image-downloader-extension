const path = require("path");

const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = {
    appHtml: resolveApp("../src/public/app.html"),
    "image-page": resolveApp("../src/content-script/image-page/index.ts"),
    "browser-action": resolveApp("../src/background/browserAction/index.tsx"),
    appBuild: resolveApp("../dist"),
    publicPath: "./",
    alias: {
        common: resolveApp("../src/common/"),
        background: resolveApp("../src/background/"),
        "content-script": resolveApp("../src/content-script/"),
    },
    manifestJson: resolveApp("../src/public/manifest.json"),
    manifestJsonBuild: resolveApp("../dist/manifest.json"),
    assets: resolveApp("../src/public/assets"),
    assetsBuild: resolveApp("../dist/assets/"),
};
