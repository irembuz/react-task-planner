import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomeScreen from "./screens/HomeScreen";
import GlobalContext from "./context/GlobalContext";
import { getMonth } from "./util";
import TaskModal from "./components/TaskModal";

const App = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showTaskModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <BrowserRouter>
    {showTaskModal && <TaskModal />}
      <div className="max-h-screen h-screen">
        <Header />
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-1">
            <SideBar />
          </div>
          <div className="p-4 col-span-5">
            <HomeScreen />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
