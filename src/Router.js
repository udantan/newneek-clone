import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Post from "./screens/Post";
import SignUp from "./screens/SignUp";
import Tag from "./screens/Tag";
import TagChild from "./screens/TagChild";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="tag" element={<Tag />}>
        <Route path=":id" element={<TagChild />} />
      </Route>
      <Route path="post/:id" element={<Post />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}
