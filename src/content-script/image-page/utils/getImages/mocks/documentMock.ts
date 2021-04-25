import fs from "fs";
import path from "path";

export const getCustomDocument = () => {
  const html = fs.readFileSync(path.resolve(__dirname, "./page.html"), "utf8");
  const customDocument = new DOMParser().parseFromString(html, "text/html");
  return customDocument;
};
