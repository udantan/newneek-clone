import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TextInput } from "../components/Intro";
import { login } from "../redux/userReducer";
import colors from "../utils/colors";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      login({
        nickname: "test",
        birthday: "1996/10/27",
        emoji: "🕵️‍♀️",
        sex: "male",
      })
    );
    navigate("/");
  };

  return (
    <ContainerForm onSubmit={handleSubmit(handleLogin)}>
      <Wrapper>
        <LoginHead>
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
        <LinkContainer style={{ textAlign: "center" }} to={"/forgot"}>
          <Link to={"/signup"}>회원가입하기</Link>
        </LinkContainer>
      </Wrapper>
    </ContainerForm>
  );
}
const LoginButton = styled.button`
  background-color: ${(props) => (props.dark ? "black" : "white")};
  font-family: "BM-Air";
  font-weight: 600;
  color: ${(props) => (props.dark ? "white" : "black")};
  padding: 15px 21px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid black;
  :hover {
    background-color: white;
    color: black;
  }
`;
const LinkContainer = styled.div`
  text-decoration: underline;
  font-family: "BM-Air";
  font-weight: 600;
  margin-bottom: 32px;
`;
const LoginInput = styled(TextInput)`
  margin-bottom: 15px;
  font-family: "NotoSans";
  font-size: 14px;
`;
const LoginHead = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  margin-bottom: 43px;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 50vh;
  padding: 96px 64px 56px;
  display: flex;
  flex-direction: column;
`;
const ContainerForm = styled.form`
  height: 150vh;
  width: 100vw;
  top: -50vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: ${colors.beige};
`;
