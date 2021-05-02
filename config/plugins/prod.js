const paths = require("../paths");
const archiver = require("archiver");
const fs = require("fs");

module.exports = () => {
  return [
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
          const archive = archiver("zip", {
            zlib: { level: 9 },
          });
          const output = compiler.options.output.path;
          archive.directory(output, false);
          archive.pipe(fs.createWriteStream(`${output}.zip`));
          archive.finalize();
        });
      },
    },
  ];
};
