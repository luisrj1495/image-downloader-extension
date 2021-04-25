import { ImagesStateType } from "common/types/Images";

export const loadingContent: ImagesStateType[] = Array.from({
  length: 5,
}).map((_, i) => ({
  url: i + "-url",
  id: i + "-id",
  type: "img",
  height: 300,
  width: 300,
  extension: "jpg",
}));
