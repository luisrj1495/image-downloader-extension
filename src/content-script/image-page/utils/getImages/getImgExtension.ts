export const getImgExtension = (url: string) => {
  const match = /\.(gif|jpe?g|tiff?|png|webp|bmp|svg)/i.exec(url);
  if (!match) return "";
  return match[0].replace(".", "").toLocaleLowerCase() || "";
};
