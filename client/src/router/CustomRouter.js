import React, { useState, useEffect } from "react";

import { Routes, useLocation } from "react-router-dom";

import TopBarProgress from "react-topbar-progress-indicator";
const CustomRouter = ({ children }) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    window.scrollTo(0, 0);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);
  TopBarProgress.config({
    barColors: {
      0: "red",
      "1.0": "#fff",
    },
    shadowBlur: 5,
  });
  return (
    <>
      {progress && <TopBarProgress />}
      <Routes>{children}</Routes>
    </>
  );
};
export default CustomRouter;
