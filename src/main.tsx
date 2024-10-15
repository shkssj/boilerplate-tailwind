import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { isEnvBrowser } from "./utils/misc";

const root = document.getElementById("root");

if (isEnvBrowser()) {
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = "cover";
  root!.style.backgroundPosition = "center";
  root!.style.backgroundRepeat = "no-repeat";
}

createRoot(root!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
