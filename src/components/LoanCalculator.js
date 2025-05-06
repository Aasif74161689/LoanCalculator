import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  useTheme,
} from "@mui/material";
import { ThemeContext } from "../contexts/ThemeContext";

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [termYears, setTermYears] = useState(1);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [currency, setCurrency] = useState("USD");

  const theme = useTheme();
  const { isDarkMode } = useContext(ThemeContext);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const termMonths = parseInt(termYears) * 12;

    if (
      isNaN(principal) ||
      isNaN(monthlyInterestRate) ||
      isNaN(termMonths) ||
      principal <= 0 ||
      monthlyInterestRate < 0 ||
      termMonths <= 0
    ) {
      alert("Please enter valid loan details.");
      setMonthlyEMI(0);
      setAmortizationSchedule([]);
      return;
    }

    const emi =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, termMonths)) /
      (Math.pow(1 + monthlyInterestRate, termMonths) - 1);

    setMonthlyEMI(emi);
    generateAmortizationSchedule(
      principal,
      monthlyInterestRate,
      termMonths,
      emi
    );
  };

  const generateAmortizationSchedule = (
    principal,
    monthlyInterestRate,
    termMonths,
    monthlyEMI
  ) => {
    const schedule = [];
    let remainingBalance = principal;

    for (let i = 1; i <= termMonths; i++) {
      const interestPayment = remainingBalance * monthlyInterestRate;
      const principalPayment = monthlyEMI - interestPayment;
      remainingBalance -= principalPayment;

      schedule.push({
        month: i,
        principal: principalPayment,
        interest: interestPayment,
        remainingBalance: Math.max(0, remainingBalance),
      });
    }
    setAmortizationSchedule(schedule);
  };

  const resetTable = () => {
    setLoanAmount(100000);
    setInterestRate(8.5);
    setTermYears(1);
    setMonthlyEMI(0);
    setAmortizationSchedule([]);
    setCurrency("USD");
  };

  return (
    <Box
      sx={{ margin: "20px" }}
      className={isDarkMode ? "dark-mode" : "light-mode"}
    >
      <Typography variant="h4" gutterBottom>
        Loan Calculator Dashboard
      </Typography>

      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Grid item>
          <TextField
            label="Loan Amount"
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item>
          <TextField
            label="Interest Rate (%)"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item>
          <TextField
            label="Term (Years)"
            type="number"
            value={termYears}
            onChange={(e) => setTermYears(e.target.value)}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" primary onClick={calculateLoan}>
            Calculate
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom>
        Monthly EMI: {currency} {monthlyEMI.toFixed(2)}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="currency-label">Currency</InputLabel>
          <Select
            labelId="currency-label"
            id="currency"
            value={currency}
            label="Currency"
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
            <MenuItem value="JPY">JPY</MenuItem>
            <MenuItem value="AUD">AUD</MenuItem>
            <MenuItem value="CAD">CAD</MenuItem>
          </Select>
        </FormControl>
        <Button variant="outlined" color="secondary" onClick={resetTable}>
          Reset Table
        </Button>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ marginTop: "20px" }}>
        Amortization Schedule ({currency})
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="amortization table">
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell align="right">Principal</TableCell>
              <TableCell align="right">Interest</TableCell>
              <TableCell align="right">Remaining Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {amortizationSchedule.map((payment) => (
              <TableRow
                key={payment.month}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {payment.month}
                </TableCell>
                <TableCell align="right">
                  {currency}
                  {payment.principal.toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {currency}
                  {payment.interest.toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {currency}
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

export default LoanCalculator;
