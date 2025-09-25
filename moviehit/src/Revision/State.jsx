import React, { useEffect, useState } from "react";

const State = () => {
  const [blast, setBlast] = useState(false);

  const toggleBlast = () => {
    setBlast((prev) => !prev); // flips true/false
  };

  useEffect(() => {
    console.log("Situation", blast ? "💚 Safe" : "❤️ Danger");
  }, [blast]);

  return (
    <>
      <div
        className={`bomb ml-10 m-5 p-5 h-20 ${
          blast ? "bg-green-600" : "bg-red-500"
        } w-16`}
      >
        ☢
      </div>

      <button
        onClick={toggleBlast}
        className={`rounded-md p-3 ml-20 ${
          blast ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {blast ? "Off" : "On"}
      </button>
    </>
  );
};          

export default State;
