import { getImg } from "../getImg";

// Mocks
import { getCustomDocument } from "../mocks/documentMock";

const customDocument = getCustomDocument();

describe("getImg", () => {
  test("Ensure we get the images from the document", () => {
    const images = getImg(customDocument);

    expect(images.length).toBe(3);

    for (let img of images) {
      expect(img).toStrictEqual({
        url: expect.any(String),
        type: "img",
        height: expect.any(Number),
        width: expect.any(Number),
        extension: expect.any(String),
      });
    }
  });
});
