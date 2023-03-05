import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../components/app";

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  ReactDOM.render(<App />, rootEl);
});
