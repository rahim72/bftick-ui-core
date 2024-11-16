"use client";
import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className=" text-sm text-nowrap flex items-center bg-gray-100 border  p-2 rounded text-blue-500">
      <h2>{formattedTime}</h2>
    </div>
  );
}
