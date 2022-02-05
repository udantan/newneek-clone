import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Article from "../components/Article";
import { MoreButton } from "./Home";
import axios from "axios";
import Loading from "../components/Loading";

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
export default function TagChild() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const { id } = useParams();
  const getArticlesbyTag = async () => {
    setLoading(true);
    let URL = "https://api.newneek.co/postview/articles";
    const { data } = await axios.get(URL, { params: { tag: id, offset: offset, limit: 12 } });
    setArticles([...data]);
    setLoading(false);
  };
  const getArticles = async () => {
    setLoading(true);
    let URL = "https://api.newneek.co/postview/articles";
    const { data } = await axios.get(URL, { params: { tag: id, offset: offset, limit: 12 } });
    setArticles([...articles, ...data]);
    setLoading(false);
  };
  useEffect(() => {
    getArticles();
  }, [offset]);
  useEffect(() => {
    getArticlesbyTag();
  }, [id]);
  return (
    <>
      {loading && articles.length < 1 && <Loading />}
      <Container>
        <GridWrapper>
          <TitleContainer>
            <h1>{TAGS[id].icon}</h1>
            <h1>{TAGS[id].text}</h1>
          </TitleContainer>
          {articles.map((article) => (
            <Article key={article.id} {...article} category={TAGS[id].text} />
          ))}
        </GridWrapper>
        {articles.length > 1 && (
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
  display: flex;
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: 600;
`;
const GridWrapper = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 340px);
  grid-gap: 1px;
`;
