import react from "react";

interface GameMarkInterface {
  mark: "circle" | "close";
  className?: string;
}

const GameMark = ({ mark, className }: GameMarkInterface) => {
  return (
    <span
      className={`material-symbols-outlined game-symbol game-${mark} ${className}`}
    >
      {mark}
    </span>
  );
};

export default GameMark;
