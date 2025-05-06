import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import AmortizationTable from "./AmortizationTable";

const CalculatorForm = () => {
  const [loan, setLoan] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(loan);
    const monthlyRate = parseFloat(rate) / 12 / 100;
    const numPayments = parseFloat(term) * 12;
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Loan Calculator Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Loan Amount"
            fullWidth
            value={loan}
            onChange={(e) => setLoan(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Interest Rate (%)"
            fullWidth
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Term (Years)"
            fullWidth
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button sx={{ mt: 2 }} variant="contained" onClick={calculateEMI}>
        Calculate
      </Button>
      {emi && (
        <Typography sx={{ mt: 2 }} variant="h6">
          Monthly EMI: ₹{emi}
        </Typography>
      )}
      {emi && <AmortizationTable principal={loan} rate={rate} term={term} />}
    </>
  );
};

export default CalculatorForm;
