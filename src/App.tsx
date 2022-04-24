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
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <SideBar />
          <HomeScreen month={currenMonth} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
