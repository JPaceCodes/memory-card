import Header from "./Components/header";
import Scoreboard from "./Components/scoreboard";
import React, { useState } from "react";
import Gameboard from "./Components/gameboard";
import "./Styles/App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
};

export default App;