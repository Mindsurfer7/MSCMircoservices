import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//@ts-ignore
import cls from "./App.module.scss";

const App = () => {
  return (
    <div className={cls.block}>
      <h1>REACT APP</h1>
      wfv w';lmfl
      {/* <Link to={"./tracker"} className={cls.button}>
        tracker
      </Link>
      <Link to={"./"} className={cls.button}>
        home
      </Link>
      <button className={cls.button}>hey!</button>
      <Outlet /> */}
    </div>
  );
};

export default App;
