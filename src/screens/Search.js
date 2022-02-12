import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

export default function Search() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onValid = async ({ keyword }) => {
    navigate(`posts/${keyword}`);
  };
  return (
    <Container>
      <Wrapper>
        <form onSubmit={handleSubmit(onValid)} style={{ position: "relative" }}>
          <TextInput {...register("keyword")} />

          <BackContainer onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </BackContainer>
        </form>
        <SearchOption>
          <OptionTitle>고슴이 추천 키워드</OptionTitle>
          <SearchOptionItem to={"#"}>대선키트</SearchOptionItem>
          <SearchOptionItem to={"#"}>대선키트</SearchOptionItem>
          <SearchOptionItem to={"#"}>대선키트</SearchOptionItem>
          <SearchOptionItem to={"#"}>대선키트</SearchOptionItem>
          <SearchOptionItem to={"#"}>대선키트</SearchOptionItem>
        </SearchOption>
      </Wrapper>
    </Container>
  );
}
const SearchOptionItem = styled(Link)`
  padding: 7px 0;
  font-size: 14px;
  font-family: "BM-Air";
  font-weight: 600;
`;
const OptionTitle = styled.h2`
  margin: 14px 0px;
  font-size: 18px;
  font-family: "BM-Air";
  font-weight: 600;
`;
const BackContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, -50%);
`;
const TextInput = styled.input.attrs({
  placeholder: "고슴아 이게 궁금해 (인물, 이슈)",
  type: "text",
})`
  width: 100%;
  height: 52px;
  padding: 10px 40px 10px 56px;
  font-size: 16px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  font-family: "BM-Air";
  font-weight: 600;
`;
const SearchOption = styled.div`
  padding: 28px 0px;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 640px;
  padding: 14px 62px;
`;
const Container = styled.div`
  position: absolute;
  top: 0;
  background-color: ${colors.beige};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
