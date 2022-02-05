import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faTwitter,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/colors";
import tagObj from "../utils/tagObj";

export default function Post() {
  const [article, setArticle] = useState();
  const [header, setHeader] = useState();
  const [footer, setFooter] = useState();

  const { id } = useParams();
  const getArticle = async () => {
    const url = `https://api.newneek.co/postview/articles/${id}`;
    const { data } = await axios.get(url);
    console.log(data.sumupTitle);
    setArticle(data.contentMain);
    setHeader({ category: data.category, title: data.sumupTitle, date: data.publishDt });
    console.log(data.tags);
    console.log(data.likesCount);
    setFooter({ tags: data.tags, likesCount: data.likesCount });
  };
  useEffect(() => {
    getArticle();
  }, []);
  return (
    <Container>
      {header !== undefined && (
        <TitleContainer>
          {header.category !== "-" && (
            <Link
              style={{ color: colors.orange, fontSize: 18, textDecoration: "underline", fontFamily: "BM-Pro" }}
              to={`/tag/${tagObj[header.category].slug}`}
            >
              {header.category}
            </Link>
          )}
          <h1 style={{ fontSize: 36, fontFamily: "BM-Pro" }}>{header.title}</h1>
          <h1 style={{ fontSize: 18, fontFamily: "BM-Air" }}>{header.date}</h1>
        </TitleContainer>
      )}
      <Wrapper dangerouslySetInnerHTML={{ __html: article }}></Wrapper>
      <PostFooter>
        <Hashtags>
          {footer?.tags?.map((tag) => (
            <h1>#{tag.name}</h1>
          ))}
        </Hashtags>
        <InnerFooter>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h1 style={{ fontSize: 24 }}>🧡</h1>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "BM-Air",
                fontSize: 14,
                color: "rgba(0,0,0,0.4)",
                fontWeight: 600,
              }}
            >
              좋았슴
            </h1>
            <h1 style={{ fontFamily: "BM-Pro" }}>{footer?.likesCount}</h1>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <Box style={{ backgroundColor: "#3b5998" }}>
              <FontAwesomeIcon icon={faFacebookF} size="1x" color="white" />
            </Box>
            <Box style={{ backgroundColor: "#00acee" }}>
              <FontAwesomeIcon icon={faTwitter} size="1x" color="white" />
            </Box>
          </div>
        </InnerFooter>
        <form>
          <input />
          <Button>뉴스레터 구돋하기</Button>
        </form>
      </PostFooter>
    </Container>
  );
}
const Box = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`;
const Hashtags = styled.div`
  margin-bottom: 25px;
  display: flex;
  gap: 10px;
  width: 100%;
  font-size: 14px;
  font-family: "BM-Air";
  font-weight: 600;
  cursor: pointer;
  h1 {
    :hover {
      color: ${colors.orange};
    }
  }
`;
const PostFooter = styled.div`
  width: 615px;
  margin-top: 100px;
  border-bottom: 1px solid black;
`;
const TitleContainer = styled.div`
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  margin-bottom: 4rem;
  padding: 60px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 615px;
  gap: 25px;
  .footnote {
    background-color: #d8d4c6;
    padding: 12px;
    border-radius: 8px;
    color: #594f31;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    font-family: "BM-Air";
  }
  ul {
    list-style: disc;
  }

  strong {
    font-weight: 600;
  }
  h3 {
    width: 100%;
    font-family: "BM-Pro";
    font-size: 24px;
    margin: 15px 0px;
  }
  p {
    width: 100%;
    font-family: "BM-Air";
    line-height: 24px;
  }
  img {
    width: 615px;
    height: auto;
    margin: 35px 0px;
  }
  a {
    border-bottom: 1px solid black;
    :hover {
      color: ${colors.orange};
      border-bottom-color: ${colors.orange};
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
