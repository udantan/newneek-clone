import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    // if (location.pathname == "/") {
    //   window.scrollTo({ top: 635 });
    // } else {
    //   window.scrollTo({ top: 125 });
    // }
    window.scrollTo({ top: 0 });
  }, [location]);

  return <></>;
}
