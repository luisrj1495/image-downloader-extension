import React from "react";

import { NoImagesContainerStyled } from "./styles";

const NoImages = () => {
  return (
    <NoImagesContainerStyled>
      <img src="/assets/images/empty-image.png" style={{ maxHeight: 150, marginBottom: "0.5rem" }} alt="" />
      <h5>No Pictures</h5>
    </NoImagesContainerStyled>
  );
};

export default NoImages;
