import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

const AmortizationTable = ({ principal, rate, term }) => {
  const P = parseFloat(principal);
  const R = parseFloat(rate) / 12 / 100;
  const N = parseFloat(term) * 12;
  const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

  let balance = P;
  const schedule = [];

  for (let i = 1; i <= N; i++) {
    const interest = balance * R;
    const principalComponent = EMI - interest;
    balance -= principalComponent;
    schedule.push({
      month: i,
      interest: interest.toFixed(2),
      principal: principalComponent.toFixed(2),
      balance: balance.toFixed(2),
    });
  }

  return (
    <>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Amortization Schedule
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.month}</TableCell>
              <TableCell>{row.principal}</TableCell>
              <TableCell>{row.interest}</TableCell>
              <TableCell>{row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AmortizationTable;
