import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import Day from "../components/Day";
import Week from "../components/Week";
import Month from "../components/Month";
import dayjs from "dayjs";

const HomeScreen: FunctionComponent<any> = ({ month }) => {
  return (
    <Routes>
      <Route path="/" element={<Day day={dayjs()} />} />
      <Route path="week" element={<Week />} />
      <Route path="month" element={<Month month={month} />} />
    </Routes>
  );
};

export default HomeScreen;
