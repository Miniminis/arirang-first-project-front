import React from "react";
import styled from "styled-components";
import ErrorImgSrc from '../assets/images/error.png';

function ErrorPage() {
    return <ErrorImage src={ErrorImgSrc}/>;
}

export default ErrorPage;


const ErrorImage = styled.img.attrs(props => ({
    src: props.src
}))`
  width: 100%;
  height: 100vh;
`;
