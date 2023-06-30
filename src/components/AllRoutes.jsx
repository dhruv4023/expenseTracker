
import Home from "Pages/Home/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
};
