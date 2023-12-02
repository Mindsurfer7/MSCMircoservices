import { createRoot } from "react-dom/client";
import React, { Suspense } from "react";
import App from "./1_App/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyBlog } from "./2_pages/blog/Blog.lazy";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const router = createBrowserRouter([
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
]);

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
