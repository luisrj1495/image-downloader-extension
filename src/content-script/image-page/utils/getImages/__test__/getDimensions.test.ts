import { getDimensions } from "../getDimensions";

describe("getDimensions", () => {
  test("Ensure we get the dimensions from the url", () => {
    const dimensions1 = getDimensions(
      "https://instagram.feoh2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79841215_1528837837270701_5626456738862465024_n.jpg?tp=1&_nc_ht=instagram.feoh2-1.fna.fbcdn.net&_nc_ohc=8DdEcePxouAAX-64RAo&edm=AIQHJ4wAAAAA&ccb=7-4&oh=e481e31d498734d5d48b93baec2b687c&oe=60AA3F75&_nc_sid=7b02f1"
    );

    const dimensions2 = getDimensions(
      "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
    );

    expect(dimensions1).toStrictEqual({
      height: 150,
      width: 150,
    });

    expect(dimensions2).toBeUndefined();
  });
});
