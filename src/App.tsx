import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <SideBar />
          <HomeScreen />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
