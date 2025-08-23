import React, { useState, useEffect } from "react";

const Clock = ({color}) => {
    const [time, setTime] = useState(new Date());

    // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString();
  return (
      <div className="flex items-center justify-center h-40 w-72  rounded-2xl shadow-lg">
      <h1 style={{color: color }} className="text-4xl font-bold">{formattedTime}</h1>
    </div>
  )
}

export default Clock