import { getDimensions } from "./getDimensions";

// Types
import { ImagesStateType } from "common/types/Images";
import { getImgExtension } from "./getImgExtension";

export const getImg = (customDocument: Document) => {
  const imagesElements = Array.from(customDocument.querySelectorAll<HTMLImageElement>("img"));
  const imagesToReturn: ImagesStateType[] = [];
  const imagesSet = new Set();

  for (const img of imagesElements) {
    if (img.src) {
      const { width, height } = getDimensions(img);
      const extension = getImgExtension(img.src);

      if (!imagesSet.has(img.src) && width > 50 && height > 50) {
        imagesToReturn.push({
          type: "img",
          width,
          height,
          url: img.src,
          extension,
          alt: img.alt || "",
        });
      }
      imagesSet.add(img.src);
    }
  }

  return imagesToReturn;
};
