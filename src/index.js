import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Root = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <React.StrictMode>
      <Router>
        <div className={`app-container ${theme}`}>
          {/* Add a styled button to toggle the theme */}
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>

          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </div>
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
