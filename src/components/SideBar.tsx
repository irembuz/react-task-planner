import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div>
        <Link to="/">Day</Link>
      </div>
      <div>
        <Link to="/week">Week</Link>
      </div>
      <div>
        <Link to="/month">Month</Link>
      </div>
    </div>
  );
};

export default SideBar;
