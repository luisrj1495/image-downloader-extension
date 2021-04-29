import { getSvg } from "./getSvg";
import { getImg } from "./getImg";

export const getImages = () => {
  const svgImages = getSvg(document);
  const imgImages = getImg(document);

  return [...imgImages, ...svgImages];
};
