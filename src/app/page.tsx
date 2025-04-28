import GameCard from "@/components/gamecard";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="pt-8 font-bold text-2xl">GAMR</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <GameCard
          src={"/images/pixelchess.png"}
          link={"/games/chess"}
          gameName={"Chess"}
        ></GameCard>
        <GameCard
          src={"/images/tictactoe.png"}
          link={"/games/tictactoe"}
          gameName="Tic-Tac-Toe"
        ></GameCard>
        <GameCard
          src={"/images/snake.png"}
          link={"/games/snake"}
          gameName="Snake"
        ></GameCard>
        <GameCard
          src={"/images/hangman.png"}
          link={"/games/hangman"}
          gameName="Hangman"
        ></GameCard>
        <GameCard
          src={"/images/laddersandsnakes.png"}
          link={"/games/snakesladders"}
          gameName="Snakes and Ladders"
        ></GameCard>
      </div>
    </div>
  );
}
