import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";

export default function WrapLayout({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 50vh;
  padding: 70px 64px 56px;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  height: 150vh;
  width: 100vw;
  top: -50vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: ${colors.beige};
`;
