import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // Import ReactDOM
import App from "./App.jsx"; // Import your App component
import "./index.css"; // Import your CSS
import { ThemeProvider } from "./common/ThemeContext.jsx";

// Create the root and render your app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
