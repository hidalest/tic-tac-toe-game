import React from "react";
import "./App.scss";
import { useAppSelector, useAppDispatch } from "./hooks/redux_hooks";
import PlayerSelectionPhase from "./Layout/PlayerSelectionPhase/PlayerSelection";
import { gameActions } from "./store";
import GameMark from "./UI/GameMark";

function App() {
  const currentPlayer = useAppSelector((state) => state.game.currentPlayer);
  const currentScores = useAppSelector((state) => state.game.scores);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <PlayerSelectionPhase />
    </div>
  );
}

export default App;
