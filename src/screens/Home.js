import React from "react";
import TagNav from "../components/TagNav";
import styled from "styled-components";
import fakeDB from "../utils/fakeDB";
import Article from "../components/Article";

export default function Home() {
  return (
    <>
      <div>
        <Container>
          <BigText style={{ height: 85 }}>우리가 시간이 없지, 세상이 안 궁금하냐!</BigText>
          <div style={{ height: 425, backgroundColor: "#FF6B00" }}></div>
        </Container>
        <TagNav />
        <GridWrapper>
          {fakeDB.articles.map((article) => (
            <Article {...article} />
          ))}
        </GridWrapper>
      </div>
    </>
  );
}
const GridWrapper = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 340px);
  grid-gap: 1px;
`;
const Container = styled.div`
  background-color: #ff6b00;
`;
const BigText = styled.h1`
  display: flex;
  align-items: center;
  font-family: "BM-Pro";
  font-size: 40px;
  background-color: #eae7de;
  padding-left: 235px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
`;
