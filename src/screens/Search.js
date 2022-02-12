import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";

export default function Search() {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
}
const Wrapper = styled.div`
  width: 640px;
`;
const Container = styled.div`
  position: absolute;
  top: 0;
  background-color: ${colors.beige};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
