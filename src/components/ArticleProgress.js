import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { LinearProgress } from "@mui/material";
import colors from "../utils/colors";

export default function ArticleProgress({ title, mainRef, headerRef }) {
  const [progress, setProgress] = useState(-1);

  const handleScroll = useCallback(() => {
    if (window.scrollY > mainRef.current.clientHeight - window.innerHeight) {
      setProgress(100);
    } else if (window.scrollY > 125 + headerRef.current.clientHeight) {
      setProgress((window.scrollY * 100) / (mainRef.current.clientHeight - window.innerHeight));
    } else {
      setProgress(0);
    }
  }, [mainRef, headerRef]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function cleanupListener() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <ProgressContainer progress={progress}>
      <LinearProgress
        sx={{
          height: 55,
          backgroundColor: "white",
          color: colors.orange,
        }}
        color="inherit"
        variant="determinate"
        value={progress}
      />
      {progress > 0 && <ProgressTitle>{title}</ProgressTitle>}
    </ProgressContainer>
  );
}

const ProgressTitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-family: "BM-Pro";
`;
const ProgressContainer = styled.div`
  position: relative;
  height: ${(props) => (props.progress > 0 ? "55px" : "0")};
  width: ${(props) => (props.progress > 0 ? "100%" : "0")};
  position: sticky;
  top: 0;
`;
