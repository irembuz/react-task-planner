import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
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
