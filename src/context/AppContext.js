import { createContext, useState, useMemo } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      darkMode,
      toggleTheme,
    }),
    [currency, darkMode]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
