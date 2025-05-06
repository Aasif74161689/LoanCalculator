import React from "react";
import LoanCalculator from "../components/LoanCalculator";
import { Typography, Box, useTheme } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "calc(100vh - 60px)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <LoanCalculator />
    </Box>
  );
};

export default HomePage;
