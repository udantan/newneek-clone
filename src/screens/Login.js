import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TextInput } from "../components/Intro";
import WrapLayout from "../components/WrapLayout";
import { login } from "../redux/userReducer";
import colors from "../utils/colors";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(
      login({
        nickname: "test",
        birthday: "1996/10/27",
        emoji: "🦔",
        sex: "male",
      })
    );
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <WrapLayout>
        <LoginHead navigate={navigate} style={{ marginTop: 26 }}>
          <img alt={"logo"} src={"/images/logo.png"} width={240} />
        </LoginHead>
        <LoginButton style={{ textAlign: "left" }}>
          <span style={{ marginRight: 14 }}>
            <FontAwesomeIcon icon={faGoogle} color={colors.googleRed} size={"lg"} />
          </span>
          구글로 시작하기
        </LoginButton>
        <hr style={{ height: "3px", border: "none", color: "#333", backgroundColor: "#333", margin: "28px 0" }} />
        <LoginInput {...register("email")} placeholder="이메일" />
        <LoginInput {...register("password")} placeholder="비밀번호" />
        <LinkContainer>
          <Link to={"/forgot"}>비밀번호를 잊으셨나요?</Link>
        </LinkContainer>
        <LoginButton onClick={() => handleLogin()} style={{ marginBottom: 32 }} dark>
          로그인
        </LoginButton>

        {/* <StyledButton dark="true" style={{ marginBottom: 32 }}>
          스타일컴포넌트
        </StyledButton> */}
        <LinkContainer style={{ textAlign: "center" }} to={"/forgot"}>
          <Link to={"/signup"}>회원가입하기</Link>
        </LinkContainer>
      </WrapLayout>
    </form>
  );
}

export const StyledButton = styled(Button).attrs(({ dark, left }) => ({
  variant: "contained",
  sx: {
    justifyContent: left ? "left" : "center",
    padding: "15px 21px",
    boxShadow: "none",
    color: dark ? "white" : "black",
    backgroundColor: dark ? "black" : "white",
    fontFamily: "BM-Air",
    fontWeight: 600,
    fontSize: 16,
    borderRadius: "8px",
    border: "1px solid black",
    transition: "none",
    height: "48px",
    ":hover": { color: "black", backgroundColor: "white" },
    "&.Mui-disabled": { color: "black", border: "none", cursor: "pointer" },
  },
}))``;

export const LoginButton = styled.button`
  background-color: ${(props) => (props.dark ? "black" : "white")};
  font-family: "BM-Air";
  font-weight: 600;
  color: ${(props) => (props.dark ? "white" : "black")};
  padding: 15px 21px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid black;
  ${(props) =>
    !props.disabled && {
      ":hover": {
        backgroundColor: "white",
        color: "black",
      },
    }}
  ${(props) =>
    props.disabled && {
      cursor: "not-allowed",
      color: "#666",
      backgroundColor: "#ccc",
      border: "none",
      ":hover": {},
    }}
`;
export const LoginInput = styled(TextInput)`
  margin-bottom: 15px;
  font-family: "NotoSans";
  font-size: 14px;
`;

export const LoginHead = styled.div.attrs(({ navigate }) => ({
  onClick: () => navigate("/"),
}))`
  width: 400px;
  display: flex;
  justify-content: center;
  margin-bottom: 43px;
  cursor: pointer;
`;

const LinkContainer = styled.div`
  text-decoration: underline;
  font-family: "BM-Air";
  font-weight: 600;
  margin-bottom: 32px;
`;
