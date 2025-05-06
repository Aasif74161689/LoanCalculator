import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function ExchangeRates() {
  const [rates, setRates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://v6.exchangerate-api.com/v6/4a065a88b86af9222ba30dfc/latest/USD"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data && data.result === "success" && data.conversion_rates) {
          setRates(data.conversion_rates);
          setError(null);
        } else {
          throw new Error(
            "API response was not successful or missing conversion rates."
          );
        }
      } catch (e) {
        setError(e);
        setRates(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <CircularProgress />
        <Typography sx={{ ml: 2 }}>Loading exchange rates...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ mt: 3 }}>
        Error fetching exchange rates: {error.message}
      </Typography>
    );
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Live Exchange Rates
      </Typography>
      {rates && Object.entries(rates).length > 0 ? (
        Object.entries(rates).map(([currency, rate]) => (
          <Typography key={currency}>
            {currency}: {rate}
          </Typography>
        ))
      ) : (
        <Typography>No exchange rates available.</Typography>
      )}
    </div>
  );
}

export default ExchangeRates;
