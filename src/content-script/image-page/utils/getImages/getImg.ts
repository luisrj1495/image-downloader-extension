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
      const dimensions = getDimensions(img.src);
      const extension = getImgExtension(img.src);

      if (!imagesSet.has(img.src) && extension) {
        imagesToReturn.push({
          type: "img",
          width: dimensions?.width || img.width || 200,
          height: dimensions?.height || img.height || 200,
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
