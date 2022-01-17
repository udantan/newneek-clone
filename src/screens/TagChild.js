import React from "react";
import { useParams } from "react-router-dom";
import tagObj from "../utils/tagObj";

export default function TagChild() {
  const { id } = useParams();
  console.log();
  return (
    <>
      <div>
        <h1>{tagObj[id].text}</h1>
      </div>
      <div style={{ height: 1000 }}>내용 들어갈 공간</div>
    </>
  );
}
