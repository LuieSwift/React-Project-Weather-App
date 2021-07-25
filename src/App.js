import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';

import "./App.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather defaultCity="Leeds" />
        </div>
        </div>
        <footer>
    <a href="https://github.com/LuieSwift/React-Project-Weather-App" class="link">
      Open-source code</a>
    by Louise Swift
  </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);