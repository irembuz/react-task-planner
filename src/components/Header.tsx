import React, { FunctionComponent, useContext, useEffect } from "react";

import dayjs from "dayjs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import AddTaskButton from "./AddTaskButton";
import GlobalContext from "../context/GlobalContext";

const Header: FunctionComponent<any> = ({ location }) => {
  const { monthIndex, setMonthIndex, pathName } = useContext(GlobalContext);

  function handlePrevPeriod() {
    switch (pathName) {
      case "/":
        break;
      case "/week":
        break;
      case "/month":
        setMonthIndex(monthIndex - 1);
        break;

      default:
        break;
    }
  }
  function handleNextPeriod() {
    switch (pathName) {
      case "/":
        break;
      case "/week":
        break;
      case "/month":
        setMonthIndex(monthIndex + 1);
        break;

      default:
        break;
    }
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-600 fond-bold">Task Planner</h1>
      <button className="border rounded py-2 px-4 mr-5" onClick={handleReset}>
        Today
      </button>
      <button>
        <span
          className="cursor-pointer text-gray-600 mx-2"
          onClick={handlePrevPeriod}
        >
          <MdKeyboardArrowLeft />
        </span>
      </button>
      <button>
        <span
          className="cursor-pointer text-gray-600 mx-2 "
          onClick={handleNextPeriod}
        >
          <MdKeyboardArrowRight />
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {pathName === "/"
          ? dayjs(
              new Date(
                dayjs().year(),
                new Date().getMonth(),
                new Date().getDate()
              )
            ).format("DD MMMM YYYY")
          : dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <AddTaskButton />
      </div>
    </header>
  );
};

export default Header;
