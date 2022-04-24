import React, { useContext, useState } from "react";
import { MdClose, MdDelete, MdDragHandle, MdSchedule } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";

export default function TaskModal() {
  const { setShowTaskModal, daySelected, dispatchCalEvent, selectedTask } =
    useContext<any>(GlobalContext);

  const [title, setTitle] = useState(selectedTask ? selectedTask.title : "");

  function handleSubmit(e: any) {
    e.preventDefault();
    const calendarEvent = {
      title,
      day: daySelected.valueOf(),
      id: selectedTask ? selectedTask.id : Date.now(),
    };
    if (selectedTask) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowTaskModal(false);
  }
  return (
    <div className="z-10 h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">
            <MdDragHandle />
          </span>
          <div>
            {selectedTask && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedTask,
                  });
                  setShowTaskModal(false);
                }}
                className="text-gray-400 cursor-pointer"
              >
                <MdDelete />
              </span>
            )}
            <button onClick={() => setShowTaskModal(false)}>
              <span className="text-gray-400">
                <MdClose />
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="text-gray-400">
              <MdSchedule />
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
