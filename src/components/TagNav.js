import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import tagObj from "../utils/tagObj";

export default function TagNav() {
  const { pathname } = useLocation();
  return (
    <Container id="tagNav" style={{ display: "flex", position: "sticky", top: 0 }}>
      <StyledDiv borderBottom={pathname === "/"}>
        <StyledLink to={"/"}>전체</StyledLink>
      </StyledDiv>
      {Object.keys(tagObj).map((tag, i) => (
        <StyledDiv key={i} borderBottom={pathname === `/tag/${tagObj[tag].slug}`}>
          <StyledLink to={`/tag/${tagObj[tag].slug}`}>
            {tagObj[tag].icon}
            {tag}
          </StyledLink>
        </StyledDiv>
      ))}
    </Container>
  );
}
const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => props.borderBottom && "4px solid black"};
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: "BM-Air";
  font-size: 18px;
  :hover {
    color: tomato;
  }
  /* border-bottom: 3px solid black; */
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 65px;
  background-color: #ffffff;
  gap: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  border-top: 1px solid rgba(0, 0, 0, 0.6);
  z-index: 99;
`;
