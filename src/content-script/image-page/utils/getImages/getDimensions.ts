export const getDimensions = (url: string) => {
    const match = /([0-9]+x[0-9]+)/i.exec(url);

    if (!match) return undefined;
    const [width, height] = match[0].toLocaleLowerCase().split("x");
    return { width: +width, height: +height };
};
