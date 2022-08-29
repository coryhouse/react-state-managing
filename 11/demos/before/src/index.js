import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./cartContext";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
