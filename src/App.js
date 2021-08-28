import React from "react";
import EightBall from "./EightBall";
import NumberGame from "./NumberGame";
import SimpleCounter from "./SimpleCounter";
import './App.css';

function App() {
  return (
    <div
      className="App">
      <EightBall />
      <NumberGame />
      <SimpleCounter />
    </div>
  );
}

export default App;
