import React from "react";
import ReactDOM from "react-dom";
import LeaderBoard from "./pages/Leaderboard/Leaderboard";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <LeaderBoard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
