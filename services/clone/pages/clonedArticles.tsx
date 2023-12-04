import Link from "next/link";
import React from "react";
import cls from "./Page.module.scss";

export default function clonedArticles() {
  return (
    <div className={cls.main}>
      <h1>NEXT MOCK APP</h1>
      <Link href={"/second"}>second page link</Link>
    </div>
  );
}
