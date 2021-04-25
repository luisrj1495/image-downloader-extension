import { debounce } from "../../common/debounce";
import { ACTIONS } from "../../common/reducer/constants";
import { getImages } from "./utils/getImages";

console.log("Loaded!😎");

window.addEventListener(
  "scroll",
  debounce((ev) => {
    console.log(ev);
    const payload = getImages().reduce((acc, img) => {
      acc[img.url] = img;
      return acc;
    }, {});

    chrome.runtime.sendMessage({
      type: ACTIONS.SEND_IMAGES,
      payload,
    });
  })
);

chrome.runtime.onMessage.addListener(function (request, _sender, sendResponse) {
  switch (request?.type) {
    case ACTIONS.GET_IMAGES: {
      return sendResponse(getImages());
    }

    default:
      break;
  }
});
