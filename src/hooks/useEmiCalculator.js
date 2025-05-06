import { useState, useCallback } from "react";

export const useEmiCalculator = () => {
  const [emi, setEmi] = useState(0);

  const calculateEMI = useCallback(
    (principal, monthlyInterestRate, termMonths) => {
      if (principal <= 0 || monthlyInterestRate < 0 || termMonths <= 0) {
        setEmi(0);
        return 0;
      }
      const calculatedEmi =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, termMonths)) /
        (Math.pow(1 + monthlyInterestRate, termMonths) - 1);
      setEmi(calculatedEmi);
      return calculatedEmi;
    },
    []
  );

  return { emi, calculateEMI };
};
