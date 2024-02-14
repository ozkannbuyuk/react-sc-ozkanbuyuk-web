import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./App.css";

function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-loader">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
