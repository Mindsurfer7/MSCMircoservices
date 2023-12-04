import Tracker from "@/2_pages/tracker/Tracker";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//@ts-ignore
import cls from "./App.module.scss";

interface AppProps {}
const App: React.FC<AppProps> = ({}) => {
  return (
    <div className={cls.block}>
      <h1>REACT APP</h1>
      <Tracker />

      <button className={cls.button}>hey! button</button>
      <Outlet />
    </div>
  );
};

export default App;
