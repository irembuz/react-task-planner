import React from "react";
import { Link } from "react-router-dom";
import { BiCalendarEvent, BiCalendarWeek, BiCalendar } from "react-icons/bi";

import SideBarData from "./SideBarData";

const SideBar = () => {
  return (
    <aside className="w-64 h-full bg-gray-50" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
        <ul className="space-y-2">
          {SideBarData.map((item: any) => (
            <li>
              <Link
                to={item.path}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-7 h-7 text-gray-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="-2 -2 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {item.icon}
                </svg>
                <span className="ml-3">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
