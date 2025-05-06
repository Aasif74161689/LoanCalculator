import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
// import NotFound from "./components/NotFound";
import ErrorPage from "./components/ErrorPage";
import { ThemeContextProvider, ThemeContext } from "./contexts/ThemeContext";
import { CurrencyContextProvider } from "./contexts/CurrencyContext";
import HomePage from "./pages/HomePage";
import ExchangeRates from "./components/ExchangeRates";
import "./styles.css"; // Keep your custom CSS if needed

function App() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
    console.log("Toggling theme. New isDarkMode:", !isDarkMode);
  };

  return (
    <ThemeContextProvider>
      <Router>
        <CurrencyContextProvider>
          <nav className={isDarkMode ? "navbar-dark" : "navbar"}>
            <div className="navbar-brand">Loan Calculator</div>
            <div className="navbar-controls">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/exchange-rates" className="nav-link">
                    Exchange Rates (Live)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/error" className="nav-link">
                    Error Page
                  </Link>
                </li>
              </ul>
              {/* Theme Toggle Button */}
              <div className="theme-toggle">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={handleThemeToggle}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </nav>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/exchange-rates" element={<ExchangeRates />} />
              <Route path="/error" element={<ErrorPage />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
        </CurrencyContextProvider>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
