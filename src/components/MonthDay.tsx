import dayjs from "dayjs";
import React, {
  useContext,
  useState,
  useEffect,
  FunctionComponent,
} from "react";
import GlobalContext from "../context/GlobalContext";

const MonthDay: FunctionComponent<any> = ({ day, rowIdx }) => {
  const [dayTasks, setDayTasks] = useState<any>([]);
  const {
    setDaySelected,
    setShowTaskModal,
    filteredTasks,
    setSelectedTask,
  } = useContext<any>(GlobalContext);

  useEffect(() => {
    const events = filteredTasks.filter(
      (evt: any) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayTasks(events);
  }, [filteredTasks, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowTaskModal(true);
        }}
      >
        {dayTasks.map((evt: any, idx: any) => (
          <div
            key={idx}
            onClick={() => setSelectedTask(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthDay;
