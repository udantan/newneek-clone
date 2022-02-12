import React from "react";
import styled, { keyframes } from "styled-components";
import colors from "../utils/colors";

export default function Loading() {
  return (
    <>
      <Container>
        <LoadingImg alt="loading" src="/images/gosum-home.png" />
      </Container>
    </>
  );
}
const rotateImage = keyframes`
 100% { transform: rotate(360deg) }
`;

const Container = styled.div`
  height: 200vh;
  width: 100vw;
  top: -50vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: ${colors.beige};
`;
const LoadingImg = styled.img`
  width: 15vw;
  animation: ${rotateImage} 3s infinite linear;
`;
