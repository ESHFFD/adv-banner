"use client";

import { useEffect, useState } from "react";
import Car from "./Car";
import { height, width } from "../constant";

const Board = () => {
  const [movePercent, setMovePercent] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  const onScroll = () => {
    const scrolled = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const newMovePercent = scrolled / scrollHeight;
    setMovePercent((prev) => {
      return newMovePercent > prev ? newMovePercent : prev;
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    window.addEventListener("scroll", onScroll);
    return () => window.addEventListener("scroll", onScroll);
  }, []);
  const onCarClick = () => {
    setShowPopUp((prev) => !prev);
  };
  return (
    <div
      className={`w-[${width}px] h-[${height}px] max-w-full fixed bottom-5 bg-slate-400 overflow-hidden rounded`}
    >
      <Car onCarClick={onCarClick} movePercent={movePercent} />
      <div className=" h-0 w-0  border-l-transparent  border-l-[500px] border-b-[90px] mt-[30px] border-red-400 " />
      {showPopUp && (
        <p className="fixed bottom-2 z-50 right-2 animate-bounce rounded bg-slate-400 px-2 py-1">
          2لورم ایپسوم
        </p>
      )}
    </div>
  );
};

export default Board;
