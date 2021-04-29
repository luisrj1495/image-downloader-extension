// Types
import { ImagesStateType } from "common/types/Images";

export const getSvg = (customDocument: Document) => {
    const svgImages = Array.from(customDocument.querySelectorAll<SVGElement>("svg"));
    const imagesToReturn: ImagesStateType[] = [];

    for (const svgImg of svgImages) {
        svgImg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        const preface = '<?xml version="1.0" standalone="no"?>\r\n';
        const svgBlob = new Blob([preface, svgImg.outerHTML], {
            type: "image/svg+xml;charset=utf-8",
        });
        const svgUrl = URL.createObjectURL(svgBlob);

        const { height, width } = getDimensions(svgImg);

        if (height > 100 && width > 100) {
            imagesToReturn.push({
                height,
                width,
                type: "svg",
                url: svgUrl,
                extension: "svg",
                alt: "",
            });
        }
    }

    return imagesToReturn;
};

const getDimensions = (data: any) => ({
    height: data?.height?.baseVal?.value || 400,
    width: data?.width?.baseVal?.value || 400,
});
