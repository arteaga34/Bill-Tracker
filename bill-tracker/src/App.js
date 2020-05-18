import React from "react";
import "./App.css";
import Months from "./components/months";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="header">Bill Tracker</h1>
        <Months />
      </header>
    </div>
  );
}

export default App;
