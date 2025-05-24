import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
