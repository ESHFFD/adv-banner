"use client";

import { useEffect, useState } from "react";
import { height, width } from "../constant";

interface Props {
  movePercent: number;
  onCarClick: () => void;
}

const Car = ({ movePercent, onCarClick }: Props) => {
  const a = (height - 30) / width;
  const [XY, setXY] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    let realWith = width;
    const documentWith = document.documentElement.offsetWidth;
    if (documentWith < realWith) realWith = documentWith;
    const x = Math.round((realWith - 110) * movePercent);
    const y = Math.round(x * a) - 10;
    setXY({ x, y });
  }, [movePercent]);
  return (
    <>
      <Wagon position={XY} shib={a} />

      <div
        style={{
          transform: `translate(${XY.x}px, ${-XY.y}px) rotate(-${a * 70}deg)`,
        }}
        className={`absolute bottom-[22px] left-0 z-10`}
      >
        <div className="relative">
          <img
            width={26}
            style={{ transform: `rotate(${XY.x}deg)` }}
            className="absolute top-[21px] left-[13px]"
            src="/game/wheel.png"
            alt=""
          />
          <img
            style={{ transform: `rotate(${XY.x}deg)` }}
            width={26}
            className="absolute top-[22px] left-[77px] "
            src="/game/wheel.png"
            alt=""
          />
        </div>
        <img
          className="cursor-pointer"
          onClick={onCarClick}
          width={110}
          src={"/game/car.png"}
          alt="car"
        />
      </div>
    </>
  );
};

export default Car;

const Wagon = ({
  position,
  shib,
}: {
  position: { x: number; y: number };
  shib: number;
}) => {
  return (
    <div
      style={{
        transform: `translate(${position.x}px, ${-position.y}px) rotate(-${
          shib * 70
        }deg)`,
      }}
      className={`absolute -bottom-[3px] -left-[97px] z-10 `}
    >
      <p className="absolute text-white bg-gray-700 px-2 rounded-t-lg shadow-lg  bottom-[30px] left-[15px]">
        لورم ایپسوم
      </p>
      <img width={100} src="/game/wagon_edited_final.png" alt="wagon" />
      <img
        style={{ transform: `rotate(${position.x}deg)` }}
        width={26}
        className="absolute top-[39px] left-[32px] "
        src="/game/wheel.png"
        alt=""
      />
    </div>
  );
};
