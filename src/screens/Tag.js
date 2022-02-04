import React from "react";
import { Outlet } from "react-router-dom";
import TagNav from "../components/TagNav";

export default function Tag() {
  return (
    <>
      <TagNav />
      <Outlet />
    </>
  );
}
