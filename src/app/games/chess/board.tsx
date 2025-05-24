import "./chess.css";

type BoardProps = {
  board: Array<Array<string | null>>;
  handleClick: (row: number, col: number) => void;
};

export const Board = ({ board, handleClick }: BoardProps) => {
  return (
    <div className="chessboard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="chess_board_row">
          {row.map((cell, cellIndex) => {
            const IsLightSquare = (rowIndex + cellIndex) % 2 === 0;
            const squareClass = IsLightSquare
              ? "chesscell light"
              : "chesscell dark";

            return (
              <button
                key={cellIndex}
                className={squareClass}
                onClick={() => handleClick(rowIndex, cellIndex)}
              >
                {cell}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};
