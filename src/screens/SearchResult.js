import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Article from "../components/Article";
import { MoreButton } from "./Home";
import axios from "axios";
import Loading from "../components/Loading";
// setLoading(true);
// const url = `https://api.newneek.co/editor/content/search/?fromWeb=1&q=${keyword}&userId=null&limit=12&offset=0`;
// const { data } = await axios.get(url);
// setLoading(false);
const TAGS = {
  "2022-presidential-election": { text: "대선", icon: "🗳" },
  politics: { text: "정치", icon: "⚖️" },
  economy: { text: "경제", icon: "💰" },
  world: { text: "세계", icon: "🌐" },
  tech: { text: "테크", icon: "🤖" },
  labor: { text: "노동", icon: "💪" },
  "new-normal": { text: "뉴노멀", icon: "💡" },
  culture: { text: "문화", icon: "🎞" },
  life: { text: "라이프", icon: "🧘" },
  community: { text: "커뮤니티", icon: "🗣" },
};
export default function SearchResult() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const { keyword } = useParams();

  const getArticles = async () => {
    setLoading(true);
    const URL = `https://api.newneek.co/editor/content/search/?fromWeb=1&q=${keyword}&userId=null&limit=12&offset=${offset}`;
    const { data } = await axios.get(URL);
    setTotalArticles(data.count);
    setArticles([...articles, ...data.results]);
    setLoading(false);

    data.offset === null && setIsLastPage(true);
  };
  useEffect(() => {
    getArticles();
  }, [offset]);

  return (
    <>
      {loading && articles.length < 1 && <Loading />}
      <Container>
        <GridWrapper>
          <TitleContainer>
            <h1 style={{ fontSize: 32 }}>
              <span style={{ color: "rgba(0,0,0,0.3)" }}>{keyword}</span>의 검색 결과예요
            </h1>
            <h1 style={{ margin: "16px 0", fontSize: "18px" }}>🦔고슴이 {totalArticles}개 찾았슴!</h1>
          </TitleContainer>
          {articles.map((article) => (
            <Article
              key={article.id}
              {...article}
              category={article?.menuTagList.length > 0 ? article?.menuTagList[0].name : "-"}
            />
          ))}
        </GridWrapper>
        {articles.length > 1 && !isLastPage && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MoreButton disabled={loading} onClick={() => setOffset(offset + 12)}>
              더보기
            </MoreButton>
          </div>
        )}
      </Container>
    </>
  );
}
const Container = styled.div`
  padding: 60px 25px;
`;
const TitleContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  margin-bottom: 25px;
  font-family: "BM-Air";
  font-weight: 600;
`;
const GridWrapper = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 340px);
  grid-gap: 1px;
`;
