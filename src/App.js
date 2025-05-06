import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import CalculatorForm from "./components/CalculatorForm";
import ExchangeRates from "./components/ExchangeRates";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<CalculatorForm />} />
            <Route path="/exchange" element={<ExchangeRates />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
