import Link from "next/link";
import Image from "next/image";

const TicTacCard = () => {
  return (
    <>
      <Link href="/games/tictactoe">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-8 bg-amber-100 hover:bg-amber-200 hover:scale-103 transition duration-150 ease-in-out ">
          <Image
            className="w-full"
            src="/images/tictactoe.png"
            alt="Sunset in the mountains"
            width={384}
            height={384}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Tic-Tac-Toe</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TicTacCard;
