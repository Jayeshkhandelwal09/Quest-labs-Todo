import React from "react"
import './App.css';
import Board from "./components/board/Board";

function App() {
  return (
    <div className="app">
        <div className="app_navbar">
          <h1>Todo Board</h1>
        </div>

        <div className="app_outer">
          <div className="app_board">
            <Board/>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
          </div>
        </div>
    </div>
  );
}

export default App;
