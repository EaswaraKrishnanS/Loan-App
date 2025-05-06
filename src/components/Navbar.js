import React from "react";
import { AppBar, Toolbar, Typography, Button, Switch } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/exchange">
          Exchange Rates (Live)
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/error">
          Error Page
        </Button>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
