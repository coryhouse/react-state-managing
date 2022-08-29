import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
