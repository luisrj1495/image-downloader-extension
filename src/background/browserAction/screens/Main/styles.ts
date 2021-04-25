import styled, { css } from "styled-components";

export const ContainerImagesStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  /* set the height */
  grid-auto-rows: 140px;
  gap: 1rem;
  padding: 1rem;
`;

const CardStyle = css`
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 6%);
  padding: 1rem;
`;

export const ItemStyled = styled.a<{
  wide?: boolean;
  tall?: boolean;
}>`
  transition: ease 250ms;
  will-change: transform filter;
  overflow: hidden;
  position: relative;
  ${CardStyle}

  .download-text {
    letter-spacing: 0.2px;
    transition: ease 500ms;
    position: absolute;
    bottom: -100%;
    left: 0;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    background-color: #f5f5f5;
    text-align: center;
  }

  &:hover {
    div {
      bottom: 0;
    }
    z-index: 1;
    transform: scale(1.1);
  }

  ${({ tall }) =>
    tall &&
    css`
      grid-row: span 2 / auto;
    `}
`;

export const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

export const NavbarStyled = styled.nav`
  position: relative;
  display: grid;
  background-color: #fff;
  gap: 0.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 6%);
`;

export const NoImagesContainerStyled = styled.div`
  ${CardStyle}

  max-width: 250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;

export const ImgExtensionStyled = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fc687b;
  padding: 5px;
  border-radius: 4px;
  color: #fff;
  font-size: 0.8rem;
`;

export const ImgDimensionsStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.5rem;
  text-align: center;
  line-height: 15px;
  font-weight: 600;
  width: 100%;
`;

export const CountStyled = styled.strong`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 4px;
  background-color: #fc687b;

  color: #fff;
  font-size: 0.8rem;
  border-top-right-radius: 12px;
  border-bottom-right-radius 12px;
`;
