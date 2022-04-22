import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div className="max-h-screen">
        <Header />
        <div className="flex flex-row space-x-12">
          <div className="basis-1/6">
            <SideBar />
          </div>
          <div className="basis-5/6 pt-5 pl-1">
            <HomeScreen />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
