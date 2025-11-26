import React from "react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
      <div className="p-6">
        <h3 className="text-5xl font-bold mb-4">
          Prospective
          <br />
          <span className="text-blue-700">customer</span>
          <br />
          <span>segmentation</span>
        </h3>
        <p className="text-sm font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          voluptate, delectus cum repudiandae aut culpa totam ipsum esse at
          eveniet sequi, facilis deleniti odit similique reprehenderit veniam
          ea. Eligendi, est?
        </p>
      </div>
      <div className="text-7xl">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContent;
