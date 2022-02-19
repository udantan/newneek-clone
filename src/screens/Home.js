import React, { useState } from "react";
import TagNav from "../components/TagNav";
import styled from "styled-components";
import colors from "../utils/colors";
import Intro from "../components/Intro";
import ArticlesContainer from "../components/ArticlesContainer";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

export default function Home() {
  const user = useSelector((state) => state.userReducer.value);
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading && <Loading />}
      <div>
        {user === null ? <Intro /> : null}
        <TagNav />
        <ArticlesContainer loading={loading} setLoading={setLoading} />
      </div>
    </>
  );
}

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
