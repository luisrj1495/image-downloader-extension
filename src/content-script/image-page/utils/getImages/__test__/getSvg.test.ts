import { getSvg } from "../getSvg";

// Mocks
import { getCustomDocument } from "../mocks/documentMock";

const customDocument = getCustomDocument();

describe("getSvg", () => {
  beforeAll(() => {
    window.URL.createObjectURL = jest
      .fn()
      .mockImplementation(() => "https://link");
  });

  test("Ensure we get the images from the document", () => {
    const images = getSvg(customDocument);

    expect(images.length).toBe(3);

    for (let img of images) {
      expect(img).toStrictEqual({
        url: expect.any(String),
        type: "svg",
        height: expect.any(Number),
        width: expect.any(Number),
        extension: "svg",
      });
    }
  });
});
