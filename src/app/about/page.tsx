export default function about() {
  return (
    <>
      <div className="flex justify-center grid grid-cols-2">
        <div className="max-w rounded overflow-hidden mt-3 ml-8 mr-8 grid grid-rows-2">
          <div className="px-6 py-4  bg-amber-100 mb-2">
            <div className="font-bold text-xl mb-2">About</div>
            <p className="text-gray-700 text-base">
              Welcome to GAMR! This is my first real programming project out
              side of any school assignments.
            </p>
          </div>
          <div className="px-6 py-4  bg-amber-100 mt-2">
            <div className="font-bold text-xl mb-2">About</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-3 ml-8 mr-8 bg-amber-100">
          <img
            className="w-full"
            src="/images/gamrlogo.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">GAMR</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="px-6 py-4">
<div className="font-bold text-xl mb-2">About</div>
<p className="text-gray-700 text-base">
  Welcome to GAMR! This is my first real programming project out
  side of any school assignments.
</p>
</div> */
}
