import react from "react";

interface GameMarkInterface {
  mark: "circle" | "close";
  className?: string;
}

const GameMark = ({ mark, className }: GameMarkInterface) => {
  const realMark = mark === "circle" ? "trip_origin" : mark;

  return (
    <span
      className={`material-symbols-outlined game-symbol game-${mark} ${className}`}
    >
      {realMark}
    </span>
  );
};

export default GameMark;
