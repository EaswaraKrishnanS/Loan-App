import { useState, useEffect } from "react";
import axios from "axios";

export const useExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(
          `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD`
        );
        setRates(res.data.conversion_rates);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  return { rates, loading };
};
