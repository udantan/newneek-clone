import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import Article from "./Article";

export default function ArticlesContainer() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const getArticles = async () => {
    setLoading(true);
    let URL = "https://api.newneek.co/postview/articles";
    const { data } = await axios.get(URL, { params: { offset: offset, limit: 12 } });
    setArticles([...articles, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getArticles();
  }, [offset]);

  return (
    <div style={{ padding: "0px 25px" }}>
      <GridWrapper>
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </GridWrapper>
      {articles.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MoreButton disabled={loading} onClick={() => setOffset(offset + 12)}>
            더보기
          </MoreButton>
        </div>
      )}
    </div>
  );
}

const GridWrapper = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 340px);
  grid-gap: 1px;
`;

export const MoreButton = styled.button`
  cursor: pointer;
  font-weight: 700;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin-top: 32px;
  height: 50px;
  width: 280px;
  :hover {
    background-color: ${(props) => (props.disabled ? "white" : colors.orange)};
  }
`;
