import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./assets/css/animate.css";
import "./assets/css/flex-slider.css";
import "./assets/css/fontawesome.css";
import "./assets/css/owl.css";
import "./assets/css/templatemo-tale-seo-agency.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);