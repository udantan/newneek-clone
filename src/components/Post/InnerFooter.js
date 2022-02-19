import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
export default function InnerFooter({ user, footer }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(footer.likesCount);
  const handleLike = () => {
    if (user.value === null) {
      alert("로그인해주세요");
      return;
    }
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    console.log("LIKE");
  };
  return (
    <>
      <Container>
        <div
          onClick={handleLike}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            filter: `grayscale(${isLiked ? "0%" : "100%"})`,
            cursor: "pointer",
          }}
        >
          <h1 style={{ fontSize: 32 }}>🧡</h1>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "BM-Air",
              fontSize: 14,
              color: isLiked ? colors.orange : "rgba(0,0,0,0.4)",
              fontWeight: 600,
            }}
          >
            좋았슴
          </h1>
          <h1 style={{ fontFamily: "BM-Pro", color: isLiked ? colors.orange : "black" }}>{likes}</h1>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Box style={{ backgroundColor: "#3b5998" }}>
            <FontAwesomeIcon icon={faFacebookF} size="1x" color="white" />
          </Box>
          <Box style={{ backgroundColor: "#00acee" }}>
            <FontAwesomeIcon icon={faTwitter} size="1x" color="white" />
          </Box>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 40px 0px;
  border-bottom: 1px solid black;
`;
const Box = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
