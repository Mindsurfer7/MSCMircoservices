import { LazyBlog } from "@/2_pages/blog/Blog.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
//@ts-ignore
import BlogModule from "blog/BlogModule";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [...BlogModule],
  },
];

export const router = createBrowserRouter(routes);

// {
//   path: "/",
//   element: (
//     <App />
//   ),
// }
