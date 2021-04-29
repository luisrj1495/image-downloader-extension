import React, { FC } from "react";

import { LoadingContainerStyled } from "./styles";

const LoadingContent: FC<{ loading: boolean }> = ({ loading, children }) => {
    return loading ? <LoadingContainerStyled /> : <> {children} </>;
};

export default LoadingContent;
