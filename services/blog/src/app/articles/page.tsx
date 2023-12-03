import React from "react";
import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
}

export default function Articles() {
  return <div className={cls.main}>PageProps</div>;
}
