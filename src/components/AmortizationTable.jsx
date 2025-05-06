import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

function AmortizationTable({ schedule, currency }) {
  if (!schedule || schedule.length === 0) {
    return (
      <Typography paragraph>No amortization schedule to display.</Typography>
    );
  }

  return (
    <Box sx={{ overflowX: "auto" }}>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="amortization schedule">
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell align="right">Principal ({currency})</TableCell>
              <TableCell align="right">Interest ({currency})</TableCell>
              <TableCell align="right">
                Remaining Balance ({currency})
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((payment, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {payment.month}
                </TableCell>
                <TableCell align="right">
                  {payment.principal.toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {payment.interest.toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {payment.remainingBalance.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AmortizationTable;
