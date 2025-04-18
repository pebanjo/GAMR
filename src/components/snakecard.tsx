import Link from "next/link";

const SnakeCard = () => {
  return (
    <>
      <Link href="/games/snake">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-8 bg-amber-100 hover:bg-amber-200 hover:scale-103 transition duration-150 ease-in-out ">
          <img
            className="w-full"
            src="/images/snake.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Snake</div>
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

export default SnakeCard;
