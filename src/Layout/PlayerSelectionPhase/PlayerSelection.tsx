import react from "react";
import GameMark from "../../UI/GameMark";
import PlayerPick from "../../UI/PlayerPick";
import "./PlayerSelectionPhase.scss";

const PlayerSelectionPhase = () => {
  return (
    <>
      <h1 className="game-title">Welcome to the best Tic Tac Toe game!</h1>
      <GameMark mark="close" className="mark-title" />
      <GameMark mark="circle" className="mark-title" />
      <PlayerPick />
      <button className="againstCPU-btn">New Game (VS CPU)</button>
    </>
  );
};

export default PlayerSelectionPhase;
