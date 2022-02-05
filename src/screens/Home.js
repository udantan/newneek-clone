import React, { useEffect, useRef, useState } from "react";
import TagNav from "../components/TagNav";
import styled from "styled-components";
import Article from "../components/Article";
import axios from "axios";
import colors from "../utils/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
export default function Home() {
  const { handleSubmit, register, formState } = useForm({ mode: "onSubmit" });
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
  const ref = useRef();
  const onValid = (data) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <>
      <div>
        <Container>
          <Intro
            style={{
              height: 85,
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              backgroundColor: colors.beige,
            }}
          >
            <div style={{ position: "relative", width: 1200, padding: "0 50px" }}>
              <BigText style={{ height: 85 }}>우리가 시간이 없지, 세상이 안 궁금하냐!</BigText>
            </div>
          </Intro>
          <div
            style={{
              padding: "40px 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ position: "relative", width: 1200, padding: "0 50px" }}>
              <div className="noto" style={{ fontWeight: 500 }}>
                <h1 style={{ marginBottom: 25 }}>
                  ✨지금 <span style={{ fontWeight: 600 }}>422,088</span>명이 뉴닉을 읽고 있어요.
                </h1>
                <h1 style={{ marginBottom: 15 }}>
                  세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은 아니잖아요!
                </h1>
                <h1>월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.</h1>

                <Form onSubmit={handleSubmit(onValid)}>
                  <TextInput
                    {...register("email", {
                      required: { value: true, message: "이메일을 입력해주세요" },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "옳바른 이메일을 입력해주세요",
                      },
                    })}
                    placeholder="이메일 주소"
                  />
                  {formState?.errors?.email && <ErrorMsg>{formState?.errors?.email.message}</ErrorMsg>}

                  <TextInput
                    {...register("nickname", { required: { value: true, message: "닉네임을 입력해주세요" } })}
                    placeholder="닉네임"
                  />
                  {formState?.errors?.nickname && <ErrorMsg>{formState?.errors?.nickname.message}</ErrorMsg>}

                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register("checkbox1", { required: true })}
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                    }
                    label={<LabelText>개인정보 수집・이용에 동의합니다</LabelText>}
                  />
                  {formState?.errors?.checkbox1 && <ErrorMsg>약관에 동의해주세요</ErrorMsg>}
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register("checkbox2", { required: true })}
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                    }
                    label={<LabelText>광고성 정보 수신에 동의합니다</LabelText>}
                  />
                  {formState?.errors?.checkbox2 && <ErrorMsg>약관에 동의해주세요</ErrorMsg>}

                  <Button
                    onClick={handleSubmit(onValid)}
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      width: 200,
                      fontSize: 14,
                      fontFamily: "BM-Pro",
                      fontWeight: 500,
                      p: "10px 15px",
                      ":hover": {
                        backgroundColor: "white",
                        color: "black",
                      },
                    }}
                    variant="contained"
                  >
                    뉴스레터 무료로 구독하기
                  </Button>
                </Form>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -50,
                  right: -50,
                  overflow: "hidden",
                  height: 475,
                  zIndex: 1,
                  width: "auto",
                }}
              >
                <img
                  alt="home"
                  style={{ overflow: "hidden", height: "auto", zIndex: 1, width: 530 }}
                  src={"/images/gosum-home.png"}
                />
              </div>
            </div>
          </div>
        </Container>
        <TagNav />
        <GridWrapper ref={ref}>
          {articles.map((article) => (
            <Article key={article.id} {...article} />
          ))}
        </GridWrapper>
        {articles.length > 1 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MoreButton disabled={loading} onClick={() => setOffset(offset + 12)}>
              더보기
            </MoreButton>
          </div>
        )}
      </div>
    </>
  );
}

const ErrorMsg = styled.h1`
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.3);
`;
const LabelText = styled.h1`
  font-size: 14px;
  font-family: "BM-Air";
`;
const TextInput = styled.input`
  width: 400px;
  height: 48px;
  padding: 10px 40px 11px 21px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "NotoSans";
    font-weight: 600;
    color: rgba(0, 0, 0, 0.3);
  }
`;
const Form = styled.form`
  margin-top: 25px;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;
const Intro = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  height: 85px;
  display: flex;
  justify-content: center;
  background-color: ${colors.beige};
`;
const MoreButton = styled.button`
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
const GridWrapper = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 340px);
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
`;
