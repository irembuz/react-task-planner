import { listenerCount } from "process";
import React, { useState } from "react";

const INITIAL_STATE = [
  { id: 1, time: "8.30", task: "Kitap oku" },
  { id: 2, time: "12.30", task: "Kedileri besle" },
];

const Day = () => {
  const [tasks, setTasks] = useState(INITIAL_STATE);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Time</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody className="task">
          {tasks.map((item) => (
            <tr>
              <td>{item.time}</td>
              <td>{item.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Day;
