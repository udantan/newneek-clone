import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ArticleProgress from "../components/ArticleProgress";
import Loading from "../components/Loading";
import AdsModal from "../components/Post/AdsModal";
import InnerFooter from "../components/Post/InnerFooter";
import PrivacyModal from "../components/Post/PrivacyModal";
import colors from "../utils/colors";
import tagObj from "../utils/tagObj";
import useUser from "../utils/useUser";
export default function Post() {
  const { register, handleSubmit } = useForm();
  const ref = useRef();
  const headerRef = useRef();
  const user = useUser();
  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [header, setHeader] = useState();
  const [footer, setFooter] = useState();
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const getArticle = useCallback(async () => {
    const url = `https://api.newneek.co/postview/articles/${id}`;
    const { data } = await axios.get(url);
    setArticle(data.contentMain);
    setHeader({ category: data.category, title: data.sumupTitle, date: data.publishDt });
    setFooter({ tags: data.tags, likesCount: data.likesCount });
    setLoading(false);
  }, [id]);
  const onValid = async (data) => {
    // post 이메일=> await axios 로 이미있는 이메일인지 확인
    // 구독안한상태
    true && alert("구독 신청되었어요! 레터가 오기 전에 웹사이트에서 콘텐츠를 읽어 보세요!");
    // false
    false && alert("이미 구독하셨네요!");
  };
  useEffect(() => {
    getArticle();
  }, [getArticle]);
  useEffect(() => {
    show ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");
  }, [show]);

  return !loading ? (
    <Container ref={ref}>
      {header !== undefined && (
        <TitleContainer ref={headerRef}>
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
      <ArticleProgress title={header?.title} mainRef={ref} headerRef={headerRef} />
      <Wrapper dangerouslySetInnerHTML={{ __html: article }}></Wrapper>
      <PostFooter>
        <Hashtags>
          {footer?.tags?.map((tag, i) => (
            <Link to={`/search/posts/${tag.name}`} key={i}>
              #{tag.name}
            </Link>
          ))}
        </Hashtags>
        <InnerFooter user={user} footer={footer} />
        <Form onSubmit={handleSubmit(onValid)}>
          <TextInput
            {...register("email", {
              required: { value: true, message: "이메일 주소를 입력해주세요" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "옳바른 이메일을 입력해주세요",
              },
            })}
            placeholder="이메일 주소"
          />
          <Button onClick={handleSubmit(onValid)} variant="contained">
            뉴스레터 구독하기
          </Button>
        </Form>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
          <h1 style={{ fontFamily: "BM-Air", fontWeight: 600, fontSize: 15, color: "rgba(0,0,0,0.4)" }}>
            구독할 경우 <LinkedText onClick={() => setShow(1)}>개인정보 수집·이용</LinkedText>과{" "}
            <LinkedText onClick={() => setShow(2)}>광고성 정보 수신</LinkedText>에 동의하게 됩니다
          </h1>
        </div>
      </PostFooter>
      {show === 1 && (
        <ModalContainer onClick={() => setShow(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <PrivacyModal />
          </Modal>
        </ModalContainer>
      )}
      {show === 2 && (
        <ModalContainer onClick={() => setShow(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <AdsModal />
          </Modal>
        </ModalContainer>
      )}
    </Container>
  ) : (
    <Loading />
  );
}

const LinkedText = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;
const Modal = styled.div`
  width: 840px;
  height: min(80vh, 550px);
  cursor: default;
  background-color: white;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 99;
`;
const ModalContainer = styled.div`
  cursor: zoom-out;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Button = styled.button`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 20px;
  padding: 18px;
  font-family: "BM-Air";
  color: white;
  box-shadow: 0 0 0 0.5px black;
  background-color: ${colors.orange};
  flex: 1;
`;
const TextInput = styled.input`
  flex: 2;
  font-family: "BM-Air";
  box-shadow: 0 0 0 0.5px black;
  border: none;
  padding: 18px;
  font-size: 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const Form = styled.form`
  width: 100%;
  gap: 1px;
  display: flex;
  align-items: center;
  margin-top: 80px;
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
  a {
    :hover {
      color: ${colors.orange};
    }
  }
`;
const PostFooter = styled.div`
  width: 615px;
  margin-top: 100px;
`;
const TitleContainer = styled.div`
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  margin-bottom: 4rem;
  padding: 60px 0px;
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
