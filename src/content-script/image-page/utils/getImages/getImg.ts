import { getDimensions } from "./getDimensions";

// Types
import { ImagesStateType } from "common/types/Images";
import { getImgExtension } from "./getImgExtension";

export const getImg = (customDocument: Document) => {
  const imagesElements = Array.from(
    customDocument.querySelectorAll<HTMLImageElement>("img")
  );
  const imagesToReturn: ImagesStateType[] = [];
  const imagesSet = new Set();

  for (let img of imagesElements) {
    if (img.src && img.width && img.height) {
      const dimensions = getDimensions(img.src);
      const extension = getImgExtension(img.src);

      if (!imagesSet.has(img.src)) {
        imagesToReturn.push({
          type: "img",
          width: dimensions?.width || img.width,
          height: dimensions?.height || img.height,
          url: img.src,
          extension,
        });
      }
      imagesSet.add(img.src);
    }
  }

  return imagesToReturn;
};
