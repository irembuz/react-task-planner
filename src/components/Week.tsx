import React, {
  useState,
  useContext,
  useEffect,
  FunctionComponent,
} from "react";

import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import { getFirstDayOfTheWeek } from "../util";

const Week: FunctionComponent<any> = () => {
  const [day, setDay] = useState<any>();
  const [tasks, setTasks] = useState<any[]>([]);
  const { filteredTasks } = useContext(GlobalContext);

  useEffect(() => {
    setDay(dayjs());
  }, []);

  useEffect(() => {
    if (day != undefined) {
      const events = filteredTasks.filter(
        (evt: any) =>
          dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
      );
      setTasks(events);
    }
  }, [filteredTasks, day]);

  return (
    <div className="flex-1 not-prose relative rounded-xl overflow-hidden">
      <div className="relative rounded-xl overflow-auto">
        <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="border border-slate-300">Time</th>
              <th className="border border-slate-300">Task</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((item: any) => (
              <tr key={item.id}>
                <td className="border border-slate-300">
                  {dayjs(item.time).format("HH:mm")}
                </td>
                <td className="border border-slate-300">{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Week;
