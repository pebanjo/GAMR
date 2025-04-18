import Image from "next/image";
import Tictactoe from "./games/tictactoe/tictactoe";
import ChessCard from "@/components/chesscard";
import TicTacCard from "@/components/tictac-card";
import SnakeCard from "@/components/snakecard";
import HangmanCard from "@/components/hangman";
import SnakesAndLaddersCard from "@/components/snakesandladders";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="pt-8 font-bold text-2xl">GAMR</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ChessCard></ChessCard>
        <TicTacCard></TicTacCard>
        <SnakeCard></SnakeCard>
        <HangmanCard></HangmanCard>
        <SnakesAndLaddersCard></SnakesAndLaddersCard>
      </div>
    </div>
  );
}
