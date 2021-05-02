import React, { useEffect, useState } from "react";

// Components
import LoadingContent from "../../components/LoadingContent";
import NoImages from "./NoImages";

// Styles
import {
  ContainerImagesStyled,
  ImageStyled,
  ItemStyled,
  NavbarStyled,
  ImgExtensionStyled,
  ImgDimensionsStyled,
  CountStyled,
  TitleContainerStyled,
  MainContainerStyled,
} from "./styles";

// Utils
import { getCurrentTab } from "common/chrome/getCurrentTab";
import { ACTIONS } from "common/reducer/constants";
import { loadingContent } from "./utils/loadingContent";

// Types
import { ImagesMetaType } from "./types";
import { ImagesStateType, SendImagesResType } from "common/types/Images";

const Main = () => {
  const [images, setImages] = useState<ImagesStateType[]>([]);
  const [metaImages, setMetaImages] = useState<ImagesMetaType>({
    status: "loading",
    msg: "",
  });

  useEffect(() => {
    const callback = (message) => {
      switch (message?.type) {
        case ACTIONS.SEND_IMAGES: {
          const payload: SendImagesResType = message.payload;
          if (payload) {
            setImages((prevImages) => {
              // Remove duplicates
              for (const img of prevImages) {
                if (payload[img.url]) {
                  delete payload[img.url];
                }
              }

              return [...prevImages, ...Object.values(payload)];
            });
          }
          break;
        }

        default:
          break;
      }
    };
    chrome.runtime.onMessage.addListener(callback);

    return () => {
      chrome.runtime.onMessage.removeListener(callback);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getImages();
    }, 1500);

    return () => {
      // Remove the url created in the svg elements
      for (const img of images) {
        if (img.type === "svg") {
          URL.revokeObjectURL(img.url);
        }
      }
    };
  }, []);

  const getImages = async () => {
    try {
      const currentTab = await getCurrentTab();
      chrome.tabs.sendMessage(
        currentTab.id!,
        {
          type: ACTIONS.GET_IMAGES,
        },
        (response: ImagesStateType[] | undefined) => {
          if (response) {
            setImages(response);
          }
          setMetaImages({
            status: "loaded",
            msg: "",
          });
        }
      );
    } catch (e) {
      setMetaImages({
        status: "loaded",
        msg: e.message || "There was an error getting the images",
      });
    }
  };

  const data = metaImages.status === "loading" ? loadingContent : images;

  return (
    <MainContainerStyled>
      <NavbarStyled>
        <img src="/assets/icons/logo_64.png" style={{ maxHeight: 50 }} alt="logo" />
        <TitleContainerStyled>
          <h1>Global Image Download</h1>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=luisrj1495&repo=image-downloader-extension&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="80"
            height="20"
            title="GitHub"
            style={{ margin: "0 auto" }}
          />
        </TitleContainerStyled>
        <CountStyled>{data.length} Images</CountStyled>
      </NavbarStyled>

      {!data.length && <NoImages />}
      <ContainerImagesStyled>
        {data.map((img) => (
          <LoadingContent key={img.url} loading={metaImages.status === "loading"}>
            <ItemStyled href={img.url} download tall={img.height >= 500 && img.type !== "svg"}>
              {img.extension !== "svg" && (
                <ImgDimensionsStyled>
                  {img.width} x {img.height}
                </ImgDimensionsStyled>
              )}

              <ImgExtensionStyled>{img.extension}</ImgExtensionStyled>
              <ImageStyled loading="lazy" crossOrigin="anonymous" src={img.url} />
              <div className="download-text" title="Download">
                Download
              </div>
            </ItemStyled>
          </LoadingContent>
        ))}
      </ContainerImagesStyled>
    </MainContainerStyled>
  );
};

export default Main;
