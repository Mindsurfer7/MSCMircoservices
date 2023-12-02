import { createRoot } from "react-dom/client";
import React from "react";
import App from "./1_App/App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(<App />);
