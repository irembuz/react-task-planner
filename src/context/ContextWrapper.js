import React, { useState, useEffect, useReducer, useMemo } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import INITIAL_STATE from "./InitialState";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}
function initEvents() {
  const storageEvents = localStorage.getItem("savedTasks");
  let parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];

  if (parsedEvents.length < 1) {
    localStorage.setItem("savedTasks", JSON.stringify(INITIAL_STATE));
    const storageEvents = localStorage.getItem("savedTasks");
    parsedEvents = storageEvents;
  }

  return parsedEvents;
}

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [labels, setLabels] = useState([]);
  const [pathName, setPathName] = useState("");
  const [savedTasks, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  const filteredTasks = useMemo(() => {
    return savedTasks.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedTasks, labels]);

  useEffect(() => {
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));
  }, [savedTasks]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedTasks.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedTasks]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showTaskModal) {
      setSelectedTask(null);
    }
  }, [showTaskModal]);

  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showTaskModal,
        setShowTaskModal,
        dispatchCalEvent,
        selectedTask,
        setSelectedTask,
        savedTasks,
        filteredTasks,
        pathName,
        setPathName,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
