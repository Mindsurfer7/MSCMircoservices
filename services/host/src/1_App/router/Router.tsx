import { LazyBlog } from "@/2_pages/blog/Blog.lazy";
import Tracker from "@/2_pages/tracker/Tracker";
import { TrackerLazy } from "@/2_pages/tracker/Tracker.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
//@ts-ignore
// import BlogModule from "blog/BlogModule";
// const BlogModule = React.lazy(() => import("blog/BlogModule"));

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/tracker",
        element: <Tracker />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

{
  /* <Suspense fallback={"loadinggggg"}>
{/* <TrackerLazy /> */
}
{
  /* <Tracker /> */
}
// </Suspense> */}
