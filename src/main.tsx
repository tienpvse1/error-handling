import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./components/error";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Error}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
