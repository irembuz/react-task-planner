import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Header() {
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-600 fond-bold">Task Planner</h1>
      <button className="border rounded py-2 px-4 mr-5">Today</button>
      <button>
        <span className="cursor-pointer text-gray-600 mx-2">
          <MdKeyboardArrowLeft />
        </span>
      </button>
      <button>
        <span className="cursor-pointer text-gray-600 mx-2">
          <MdKeyboardArrowRight />
        </span>
      </button>
    </header>
  );
}
