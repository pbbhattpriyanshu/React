import React from "react";

const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full py-7 px-5 flex flex-col justify-between">
      <h1 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold">
        1
      </h1>
      <div>
        <p className="leading-relaxed text-white mb-11">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          vel, nobis debitis eaque repudiandae iste quo. Alias.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white px-5 py-2 font-medium rounded-full">
            Satisfied
          </button>
          <button
            className="bg-blue-600 text-white px-3 py-2
                     font-medium rounded-full"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
