import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import cities from "./Store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={cities}>
    <App />
  </Provider>
);
