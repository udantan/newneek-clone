import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export const TagList = [
  { text: "전체", url: "/", icon: "" },
  { text: "대선", url: "/tag/2022-presidential-election", icon: "" },
  { text: "정치", url: "/tag/politics", icon: "" },
  { text: "경제", url: "/tag/economy", icon: "" },
  { text: "세계", url: "/tag/world", icon: "" },
  { text: "테크", url: "/tag/tech", icon: "" },
  { text: "노동", url: "/tag/labor", icon: "" },
  { text: "뉴노멀", url: "/tag/new-normal", icon: "" },
  { text: "문화", url: "/tag/culture", icon: "" },
  { text: "라이프", url: "/tag/life", icon: "" },
  { text: "커뮤니티", url: "/tag/community", icon: "" },
];

export default function TagNav() {
  const { pathname } = useLocation();
  return (
    <>
      <Container style={{ display: "flex", position: "sticky", top: 0 }}>
        {TagList.map((Tag, i) => (
          <StyledDiv key={i} borderBottom={pathname === Tag.url}>
            <StyledLink to={Tag.url} state={{ text: Tag.text }}>
              {Tag.icon}
              {Tag.text}
            </StyledLink>
          </StyledDiv>
        ))}
      </Container>
    </>
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
`;
