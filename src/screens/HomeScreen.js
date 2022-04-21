import React from "react";
import Day from "../components/Day";
import Week from "../components/Week";
import Month from "../components/Month";

const HomeScreen = () => {
  return (
    <div>
      <Day />
      <Week />
      <Month />
    </div>
  );
};

export default HomeScreen;
