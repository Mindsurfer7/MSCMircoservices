import { LazyBlog } from "@/2_pages/blog/Blog.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/blog",
        element: (
          <Suspense fallback={"Loadin..."}>
            <LazyBlog />
          </Suspense>
        ),
      },
      {
        path: "/main",
        element: <div>main</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
