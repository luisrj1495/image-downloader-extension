import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from{
    background-position: 0% 0;
  }
  to{
    background-position: -300% 0;
  }
`;

export const LoadingContainerStyled = styled.div`
    border-radius: 4px;
    min-height: 72px;
    overflow: hidden;

    background: linear-gradient(90deg, #e4e4e4 0%, #f3f3f3 60%, #e4e4e4 100%);
    animation: ${loading} 1000ms ease infinite;
    background-size: 150%;
`;
