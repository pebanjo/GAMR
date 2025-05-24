"use client";
import { useState } from "react";
import { Board } from "./board";
import "./chess.css";

type BoardArray = Array<Array<string | null>>;

const ChessGame = () => {
  const initialBoard = Array.from(
    {
      length: 8,
    },
    () => Array.from({ length: 8 }, () => null)
  );

  const [board, setBoard] = useState<BoardArray>(initialBoard);
  const [player, setPlayer] = useState<"W" | "B">("W");
  const [winner, setWinner] = useState<string | null>(null);

  const handleOnClick = (row: number, col: number) => {
    if (board[row][col]) return;
    setBoard((prev) =>
      prev.map((r, i) => r.map((c, j) => (i === row && j === col ? player : c)))
    );
    setPlayer((p) => (p === "W" ? "B" : "W"));
  };

  return (
    <div className="chessgame">
      <Board board={board} handleClick={handleOnClick} />
    </div>
  );
};

export default ChessGame;
