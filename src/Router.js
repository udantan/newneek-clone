import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Post from "./screens/Post";
import SignUp from "./screens/SignUp";
import Tag from "./screens/Tag";
import TagChild from "./screens/TagChild";
import Class from "./screens/Class";
import Help from "./screens/Help";
import Search from "./screens/Search";
import SearchResult from "./screens/SearchResult";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="tag" element={<Tag />}>
        <Route path=":id" element={<TagChild />} />
      </Route>
      <Route path="post/:id" element={<Post />} />
      <Route path="search" element={<Search />} />
      <Route path="search/posts/:keyword" element={<SearchResult />} />

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="class" element={<Class />} />
      <Route path="help" element={<Help />} />
    </Routes>
  );
}
