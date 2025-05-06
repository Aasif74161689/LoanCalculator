import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
