import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tagObj from "../utils/tagObj";

export default function Article(props) {
  const cleanText = props.contentMain.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <Link to={`/post/${props.id}`}>
      <Container>
        <div>
          <TagIcon>{props.category !== "-" ? tagObj[props.category].icon : "📃"}</TagIcon>
          <Title>{props.sumupTitle}</Title>
          <SubTitleContainer>
            <SubTitle>{cleanText}</SubTitle>
          </SubTitleContainer>
        </div>
        <div>
          <FooterText>{props.publishDt}</FooterText>
          <FooterText>{props.category !== "-" ? props.category : ""}</FooterText>
        </div>
      </Container>
    </Link>
  );
}
const Container = styled.div`
  cursor: pointer;
  filter: grayscale(100%);
  width: 340px;
  height: 340px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :hover {
    background-color: white;
    filter: grayscale(0%);
  }
`;

const TagIcon = styled.h1`
  font-size: 35px;
`;
const Title = styled.h1`
  font-size: 20px;
  font-family: "BM-Pro";
  margin: 20px 0px 25px 0px;
`;
const SubTitle = styled.h1`
  font-size: 16px;
  font-family: "BM-Air";
  line-height: 24px;
`;
const SubTitleContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const FooterText = styled.span`
  margin-right: 15px;
  font-size: 16px;
  font-family: "BM-Air";
`;
