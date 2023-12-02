import React, { useState } from "react";
import {Outlet} from "react-router-dom";
import cls from "./App.module.scss";
const App = () => {
  return (
    <div className={cls.block}>
      <h1>HOST APP</h1>
      <button className={cls.button}>hey!</button>
      <button className={cls.button}>hey!</button>
      <button className={cls.button}>hey!</button>
      <Outlet />
    </div>
  );
};

export default App;
