export type ImagesStateType = {
  url: string;
  type: "img" | "svg";
  height: number;
  width: number;
  extension: string;
};

export type SendImagesResType = {
  [url: string]: ImagesStateType;
};
