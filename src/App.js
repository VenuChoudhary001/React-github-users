import React from "react";

import { ThemeProvider } from "@material-ui/core";
import THEME from "./theme/theme";
import Dashboard from "./pages/dashboard";
import { PROVIDER } from "./context/search-context";
import "./App.css";
function App() {
  return (
    <div>
      <ThemeProvider theme={THEME}>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
