import React from "react";
//@ts-ignore
import cls from "./Blog.module.scss";

// interface BlogProps {
//   className?: string;
// } <BlogProps>  { className }

const Blog: React.FC = () => {
  return <div className={cls.Blog}>Blog glol blob blol</div>;
};

export default Blog;
