import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
`;
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div style={{ backgroundColor: "#EAE7DE" }}>
        <TopHeader />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
