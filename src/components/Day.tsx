import { listenerCount } from "process";
import React, { useState, useEffect } from "react";

const Day = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const timeStamp1 = new Date().setMinutes(0) + 2 * 60 * 60 * 1000;
    const timeStamp2 = new Date().setMinutes(0) + 4 * 60 * 60 * 1000;
    const INITIAL_STATE = [
      { id: 1, time: new Date(timeStamp1), task: "Kitap oku" },
      { id: 2, time: new Date(timeStamp2), task: "Kedileri besle" },
    ];
    setTasks([...INITIAL_STATE])
  }, []);

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
            <tr>
              <td>
                {item.time.getHours()} :
                {item.time.getMinutes()}
              </td>
              <td>{item.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Day;
