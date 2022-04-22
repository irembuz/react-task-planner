import React from "react";
import { BiCalendarEvent, BiCalendarWeek, BiCalendar } from "react-icons/bi";

const SideBarData = [
  {
    title: "Day",
    path: "/",
    icon: <BiCalendarEvent />,
  },
  {
    title: "Week",
    path: "/week",
    icon: <BiCalendarWeek />,
  },
  {
    title: "Month",
    path: "/month",
    icon: <BiCalendar />,
  },
];

export default SideBarData;
