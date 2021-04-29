const createLinkBtn = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = "⌵";
  link.style.background = "#fc687b";
  link.style.color = "#fff";
  link.style.position = "relative";
  link.style.right = "0px";
  link.style.top = "0px";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.padding = "2px 2px 4px 2px";
  link.style.zIndex = "99999";
  link.id = "image-downloader-button";
  link.title = "Download";
  link.style.fontWeight = "bold";
  link.style.maxHeight = "10px";
  link.style.maxWidth = "10px";
  link.style.textDecoration = "none";
  link.download = "";

  return link;
};

export const removeLinkButton = () => {
  const links = Array.from(document.querySelectorAll<HTMLLinkElement>("#image-downloader-button"));

  for (const link of links) {
    link.remove();
  }
};

export const addLinkButton = (img: HTMLImageElement) => {
  const link = createLinkBtn(img.src);
  const container = document.createElement("div");
  container.className = "image-downloader-extension";
  container.style.position = "relative";

  if (img.parentElement) {
    img.parentElement.style.position = "relative";
  }

  // container.append(img.cloneNode(true));
  // container.append(link);

  img.insertAdjacentElement("beforebegin", link);

  // img.remove();
};
