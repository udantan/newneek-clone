import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Article from "../components/Article";
import { MoreButton } from "./Home";
import axios from "axios";
import Loading from "../components/Loading";

const TAGS = {
  "2022-presidential-election": { text: "ëě ", icon: "đł" },
  politics: { text: "ě ěš", icon: "âď¸" },
  economy: { text: "ę˛˝ě ", icon: "đ°" },
  world: { text: "ě¸ęł", icon: "đ" },
  tech: { text: "ííŹ", icon: "đ¤" },
  labor: { text: "ë¸ë", icon: "đŞ" },
  "new-normal": { text: "ë´ë¸ëŠ", icon: "đĄ" },
  culture: { text: "ëŹ¸í", icon: "đ" },
  life: { text: "ëźě´í", icon: "đ§" },
  community: { text: "ěť¤ëŽ¤ëí°", icon: "đŁ" },
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
              ëëł´ę¸°
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
