import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MyTheme } from "./providers/theme/theme.provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyTheme>
      <App />
    </MyTheme>
  </StrictMode>
);
