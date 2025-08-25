import React from "react";

const Tailwind = () => {
  return (
    <div className="sm:bg-yellow-500 md:bg-amber-900">
      {/* <div className="h-12 w-full bg-violet-600 border-2 border-cyan rounded-xl p-2 ">
        <h1 className="text-xl mb-2 pb-5 text-red-500 text-center font-mono font-semibold">
          Software Developer
        </h1>
        <p className="text-yellow-400 font-light text-sm mt-4 p-4 text-center">
          A software developer designs, builds, tests, and maintains software
          applications and systems, from mobile apps and video games to
          operating systems and networks. They work throughout the entire
          software development life cycle, translating user needs and business
          requirements into functional code and ensuring the final product is
          stable and reliable.
        </p>
      </div> */}

      <div className="flex flex-col items-center space-y-7 justify-evenly mt-3">
        <div className="h-16 w-16 rounded-full bg-blue-400"></div>
        <div className="h-16 w-16 rounded-full bg-orange-400"></div>
        <div className="h-16 w-16 rounded-full bg-green-400"></div>
      </div>
    </div>
  );
};

export default Tailwind;
