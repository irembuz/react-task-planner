import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index: any) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index: any) => {},
  daySelected: null,
  setDaySelected: (day: any) => {},
  showTaskModal: false,
  setShowTaskModal: () => {},
  dispatchCalEvent: ({ type, payload }: any) => {},
  savedTasks: [],
  selectedTask: null,
  setSelectedTask: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  filteredTasks: [],
});

export default GlobalContext