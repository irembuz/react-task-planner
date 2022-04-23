import React, {
  useState,
  useEffect,
  FunctionComponent,
  useContext,
} from "react";
import dayjs from "dayjs";

import GlobalContext from "../context/GlobalContext";

const Day: FunctionComponent<any> = ({ day }) => {
  const [tasks, setTasks] = useState<any[]>([]);
  const { filteredEvents } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt: any) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setTasks(events);
  }, [filteredEvents, day]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody className="task">
          {tasks.map((item: any) => (
            <tr key={item.id}>
              <td>{dayjs(item.time).format("HH:mm")}</td>
              <td>{item.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Day;
