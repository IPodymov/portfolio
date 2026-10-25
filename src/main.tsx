import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Global styles must load before components so component CSS can override them.
import "@/styles/index.css";
import { App } from "@/app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
