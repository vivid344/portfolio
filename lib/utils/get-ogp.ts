import { JSDOM } from "jsdom";

const getOGPImage = async (url?: string) => {
  if (!url) {
    return "";
  }
  const response = await fetch(url);
  const text = await response.text();
  const dom = new JSDOM(
    text,
  ).window.document.querySelectorAll("meta");
  let imagePath = "";
  Array.from(dom).find((item) => {
    const property = item.getAttribute("property");
    if (property === "og:image") {
      imagePath = item.getAttribute("content") || "";
    }
  });
  return imagePath;
};

export { getOGPImage };
