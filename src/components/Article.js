import React from "react";

import styled from "styled-components";
import tagObj from "../utils/tagObj";

export default function Article(props) {
  console.log(props);
  return (
    <Container>
      <div>
        <TagIcon>{tagObj[props.tag].icon}</TagIcon>
        <Title>{props.title}</Title>
        <SubTitleContainer>
          <SubTitle>{props.subTitle}</SubTitle>
        </SubTitleContainer>
      </div>
      <div>
        <FooterText>2022/01/17</FooterText>
        <FooterText>{tagObj[props.tag].text}</FooterText>
      </div>
    </Container>
  );
}
const Container = styled.div`
  cursor: pointer;
  width: 340px;
  height: 340px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :hover {
    background-color: white;
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
