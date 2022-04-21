import React from "react";
import { Routes, Route } from "react-router-dom";
import Day from "../components/Day";
import Week from "../components/Week";
import Month from "../components/Month";

const HomeScreen = () => {
  return (
    <Routes>
      <Route path="/" element={<Day />} />
      <Route path="week" element={<Week />} />
      <Route path="month" element={<Month />} />
    </Routes>
  );
};

export default HomeScreen;
