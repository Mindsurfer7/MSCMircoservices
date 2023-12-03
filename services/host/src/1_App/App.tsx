import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import cls from "./App.module.scss";

const App = () => {
  return (
    <div className={cls.block}>
      <h1>HOST APP</h1>
      <Link to={"./blog"} className={cls.button}>
        blog
      </Link>
      <Link to={"./"} className={cls.button}>
        home
      </Link>
      <button className={cls.button}>hey!</button>
      <Outlet />
    </div>
  );
};

export default App;
