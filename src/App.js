import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ScrollToTop from "./utils/ScrollToTop";
import "../src/index.css";
import { useDispatch } from "react-redux";
import { login } from "./redux/userReducer";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
`;
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <div style={{ backgroundColor: "#EAE7DE" }}>
        <TopHeader />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
