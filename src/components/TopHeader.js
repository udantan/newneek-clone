import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

export default function TopHeader() {
  return (
    <>
      <Container>
        <StyledLink to={"class"}>경제기본기</StyledLink>
        <Link to={"/"}>
          <img src={"/images/logo.png"} height={32} />
        </Link>
        <div style={{ display: "flex", borderCollapse: "collapse" }}>
          <Box>
            <Link to={"search"}>
              <FontAwesomeIcon icon={faSearch} size="1x" color="black" />
            </Link>
          </Box>
          <Box style={{ borderLeft: "0" }}>
            <Link to={"login"}>
              <FontAwesomeIcon icon={faUser} size="1x" color="black" />
            </Link>
          </Box>
        </div>
      </Container>
    </>
  );
}
const StyledLink = styled(Link)`
  font-family: "BM-Air";
  color: black;
  text-decoration: none;
  font-size: 20px;
  :hover {
    color: tomato;
  }
`;
const Container = styled.div`
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 48px;
  width: 48px;
`;
