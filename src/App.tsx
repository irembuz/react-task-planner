import React from "react";
//import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <HomeScreen />
    </div>
  );
}

export default App;
