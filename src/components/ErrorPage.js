import React from "react";
import { Typography, Box } from "@mui/material";

const ErrorPage = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h3" color="error">
      404 - Page Not Found
    </Typography>
    <Typography variant="body1">
      The page you are looking for does not exist.
    </Typography>
  </Box>
);

export default ErrorPage;
