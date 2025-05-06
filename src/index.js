// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { CurrencyContextProvider } from "./contexts/CurrencyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CurrencyContextProvider>
        <App />
      </CurrencyContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
