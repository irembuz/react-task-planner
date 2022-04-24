import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function AddTaskButton() {
  const { setShowTaskModal } = useContext<any>(GlobalContext);
  return (
    <button
      onClick={() => setShowTaskModal(true)}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
    >
      <span className="pl-3 pr-7">Add Task</span>
    </button>
  );
}
