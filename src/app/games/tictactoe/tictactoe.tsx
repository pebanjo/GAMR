"use client";
import { useState } from "react";
import { Board } from "./board";
import "./tic-tac-toe.css";

type BoardArray = Array<Array<string | null>>;

const pastBoardStates: (BoardArray | null)[] = [];
const futureboardStates: (BoardArray | null)[] = [];

const checkWinner = (board: BoardArray): string | null => {
  const lines = [
    //rader
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],

    //kolonner
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],

    //diagonaler
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];
  for (const line of lines) {
    if (line[0] && line[0] === line[1] && line[1] === line[2]) {
      return line[0];
    }
  }
  return null;
};

const Tictactoe = () => {
  const initialBoard = Array.from(
    {
      length: 3,
    },
    () => Array.from({ length: 3 }, () => null)
  );
  const [board, setBoard] = useState<any>(initialBoard);
  const [player, setPlayer] = useState<string>("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [isNoWinner, setIsNoWinner] = useState<boolean | null>(false);

  const handleOnClick = (row: number, column: number) => {
    if (board[row][column] || winner) {
      return;
    }
    const updatedPlayerBoard = board.map((newRow: any[], rowIndex: number) =>
      newRow.map((cell, cellIndex) =>
        rowIndex === row && cellIndex === column ? player : cell
      )
    );
    setBoard(updatedPlayerBoard);
    //sjekker vinner
    const newWinner = checkWinner(updatedPlayerBoard);
    addPreviousGameState(updatedPlayerBoard);
    futureboardStates.length = 0;
    setWinner(newWinner);
    setPlayer("X");

    //ingen vinner
    const hasNullValue = updatedPlayerBoard.some((row: any[]) =>
      row.some((cell) => cell === null)
    );

    if (!winner && !hasNullValue) {
      setIsNoWinner(true);
      return;
    }
    if (!newWinner) {
      const [computerRow, computerCol] = makeComputerMove(updatedPlayerBoard);
      const updatedComputerBoard = updatedPlayerBoard.map(
        (newRow: any[], rowIndex: number) =>
          newRow.map((cell: any, cellIndex: number) =>
            rowIndex === computerRow && cellIndex === computerCol ? "O" : cell
          )
      );
      setTimeout(() => {
        setBoard(updatedComputerBoard);
        setWinner(checkWinner(updatedComputerBoard));
        addPreviousGameState(updatedComputerBoard);
      }, 350);
    }
  };

  const restartGame = () => {
    setBoard(initialBoard);
    setPlayer("X");
    setWinner(null);
    setIsNoWinner(null);
    pastBoardStates.length = 0;
    futureboardStates.length = 0;
  };

  const addPreviousGameState = (board: BoardArray) => {
    pastBoardStates.push(board);
    futureboardStates.length = 0;
  };

  const popPreviousGameState = () => {
    if (pastBoardStates.length === 0) {
      return null;
    }
    futureboardStates.push(board);
    return pastBoardStates.pop();
  };

  const popFutureGameState = () => {
    if (futureboardStates.length === 0) {
      return null;
    }
    pastBoardStates.push(board);
    return futureboardStates.pop();
  };

  const makeComputerMove = (board: BoardArray): [number, number] => {
    let bestVal = -Infinity;
    let bestMove: [number, number] = [0, 0];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === null) {
          board[i][j] = "O";
          const moveVal = minimax(board, 0, false);
          board[i][j] = null; // revert

          if (moveVal > bestVal) {
            bestVal = moveVal;
            bestMove = [i, j];
          }
        }
      }
    }
    return bestMove;
  };

  const minimax = (
    board: BoardArray,
    depth: number,
    isMaximizing: boolean
  ): number => {
    const winner = checkWinner(board);
    if (winner === "O") return 10;
    if (winner === "X") return -10;

    const hasEmpty = board.some((row) => row.includes(null));
    if (!hasEmpty) return 0; // uavgjort

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === null) {
            board[i][j] = "O";
            const score = minimax(board, depth + 1, false);
            board[i][j] = null; // revert
            bestScore = Math.max(bestScore, score);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === null) {
            board[i][j] = "X";
            const score = minimax(board, depth + 1, true);
            board[i][j] = null; // revert
            bestScore = Math.min(bestScore, score);
          }
        }
      }
      return bestScore;
    }
  };

  return (
    <div className="pt-8">
      <div className="game">
        <Board board={board} handleClick={handleOnClick} />
        <div className="flex justify-center grid grid-rows-2 pt-4 pb-4">
          <button className="reset" type="button" onClick={() => restartGame()}>
            Restart
          </button>
          <div className="flex justify-center">
            <p>{winner && `${winner === "X" ? "You Won!" : "AI Won"}`}</p>
            {isNoWinner && <p>Ingen vant</p>}
          </div>
        </div>
      </div>
      <button
        className="prev"
        type="button"
        onClick={() => {
          const prev = popPreviousGameState();
          if (prev) {
            setBoard(prev);
          }
        }}
      >
        ← Previous
      </button>

      <button
        className="next"
        type="button"
        onClick={() => {
          const next = popFutureGameState();
          if (next) {
            setBoard(next);
          }
        }}
      >
        Next →
      </button>
    </div>
  );
};
export default Tictactoe;
