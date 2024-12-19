import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.jsx";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter ni import qiling

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
      <BrowserRouter> {/* BrowserRouter bilan o‘rash */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
);
