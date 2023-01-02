import react, { useState } from "react";
import Card from "./Card/Card";
import GameMark from "./GameMark";
import "./PlayerPick.scss";

const PlayerPick = () => {
  const [activeClass, setActiveClass] = useState(0);

  const onClickButton = () => {
    setActiveClass(activeClass == 0 ? 1 : 0);
  };

  return (
    <Card className="card">
      <h2 className="playerPick-title">Pick Player's Mark</h2>
      <section className="btn-container">
        <button onClick={onClickButton}>
          <GameMark
            mark="close"
            className={`${"mark"} ${activeClass == 0 ? "selected" : ""}`}
          />
        </button>
        <button onClick={onClickButton}>
          <GameMark
            mark="circle"
            className={`${"mark"} ${activeClass == 1 ? "selected" : ""}`}
          />
        </button>
      </section>

      <p className="playerPick-tip">Remember 'X' goes first!</p>
    </Card>
  );
};

export default PlayerPick;
