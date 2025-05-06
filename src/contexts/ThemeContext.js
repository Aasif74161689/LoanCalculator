import React, { createContext, useState, useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light"); // 'light' or 'dark'

  // Use useMemo to memoize the theme creation.
  // The theme will only be re-created if the 'mode' changes.
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // Light mode palette
                primary: {
                  main: "#007bff",
                },
                secondary: {
                  main: "#6c757d",
                },
                background: {
                  default: "#f4f4f4",
                  paper: "#fff",
                },
                text: {
                  primary: "#000",
                  secondary: "#555",
                },
              }
            : {
                // Dark mode palette
                primary: {
                  main: "#90caf9",
                },
                secondary: {
                  main: "#f48fb1",
                },
                background: {
                  default: "#303030",
                  paper: "#424242",
                },
                text: {
                  primary: "#fff",
                  secondary: "#ccc",
                },
              }),
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const contextValue = useMemo(
    () => ({
      isDarkMode: mode === "dark",
      toggleTheme,
    }),
    [mode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
