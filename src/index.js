import React from "react";
import ReactDOM from "react-dom/client";
import Tasks from "./features/tasks/Tasks";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Tasks/>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
