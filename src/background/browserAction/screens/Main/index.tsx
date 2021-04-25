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
} from "./styles";

// Utils
import { getCurrentTab } from "common/chrome/getCurrentTab";
import { ACTIONS } from "common/reducer/constants";
import { loadingContent } from "./utils/loadingContent";

// Types
import { ImagesMetaType } from "./types";
import {
  ImagesStateType,
  SendImagesResType,
} from "../../../../common/types/Images";

const Main = () => {
  const [images, setImages] = useState<ImagesStateType[]>([]);
  const [metaImages, setMetaImages] = useState<ImagesMetaType>({
    status: "idle",
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
              for (let img of prevImages) {
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
    getImages();

    return () => {
      // Remove the url created in the svg elements
      for (let img of images) {
        if (img.type === "svg") {
          URL.revokeObjectURL(img.url);
        }
      }
    };
  }, []);

  const getImages = async () => {
    try {
      setMetaImages({
        status: "loading",
        msg: "",
      });
      const currentTab = await getCurrentTab();
      console.log({ currentTab });
      chrome.windows.getCurrent(console.log);
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
          console.log({ response });
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
    <div
      style={{
        minWidth: 600,
        backgroundColor: "#f5f5f5",
      }}
    >
      <NavbarStyled>
        <h1>
          Download Images |{" "}
          <strong style={{ marginLeft: 4 }}> Found {data.length}</strong>
        </h1>
      </NavbarStyled>

      {!data.length && <NoImages />}
      <ContainerImagesStyled>
        {data.map((img) => (
          <LoadingContent
            key={img.url}
            loading={metaImages.status === "loading"}
          >
            <ItemStyled
              href={img.url}
              download
              tall={img.height >= 500 && img.type !== "svg"}
            >
              <ImgDimensionsStyled>
                {img.width} x {img.height}
              </ImgDimensionsStyled>
              <ImgExtensionStyled>{img.extension}</ImgExtensionStyled>
              <ImageStyled loading="lazy" src={img.url} />
              <div className="download-text" title="Download">
                Download
              </div>
            </ItemStyled>
          </LoadingContent>
        ))}
      </ContainerImagesStyled>
    </div>
  );
};

export default Main;
