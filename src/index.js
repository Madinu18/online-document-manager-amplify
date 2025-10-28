import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 👇 Add this snippet BEFORE rendering
const resizeObserverErr =
  /(ResizeObserver loop limit exceeded|ResizeObserver loop completed)/i;

window.addEventListener("error", (e) => {
  if (resizeObserverErr.test(e.message)) {
    e.stopImmediatePropagation();
  }
});

window.addEventListener("unhandledrejection", (e) => {
  if (resizeObserverErr.test(e.reason?.message)) {
    e.stopImmediatePropagation();
  }
});

// 👇 Normal React rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Optional performance logging
reportWebVitals();
