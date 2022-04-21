import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <HomeScreen />
      </div>
    </div>
  );
};

export default App;
