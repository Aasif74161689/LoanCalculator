import { useState, useCallback } from "react";
import axios from "axios";

const API_KEY = " 4a065a88b86af9222ba30dfc"; // Replace with your actual API key
const BASE_URL = "https://v6.exchangerate-api.com/v6";

export const useExchangeRate = (baseCurrency) => {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchExchangeRates = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`
      );
      if (response.data.result === "success") {
        setExchangeRates(response.data.conversion_rates);
      } else {
        setError("Failed to fetch exchange rates");
      }
    } catch (err) {
      setError("Error fetching exchange rates");
    } finally {
      setLoading(false);
    }
  }, [baseCurrency]);

  return { exchangeRates, fetchExchangeRates, error, loading };
};
