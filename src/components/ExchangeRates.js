import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

const ExchangeRates = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/08f3ef78107adb1a7f24cb96/latest/USD"
      )
      .then((response) => setRates(response.data.conversion_rates))
      .catch((error) => console.error("Error fetching exchange rates:", error));
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Live Exchange Rates (Base: USD)
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(rates).map(([currency, rate]) => (
            <TableRow key={currency}>
              <TableCell>{currency}</TableCell>
              <TableCell>{rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ExchangeRates;
