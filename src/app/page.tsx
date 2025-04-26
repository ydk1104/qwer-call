/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import YouTube from "react-youtube";

import Image from "next/image";
import { 가사 } from "./TBH";
import { RefObject, useRef, useState } from "react";
import { motion } from "framer-motion";

const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef: RefObject<NodeJS.Timeout | null> = useRef(null);

  const handleStart = (e: any) => {
    const time = e.target.getCurrentTime();
    if (isRunning) return;
    setIsRunning(true);
    setTimer(time * 100);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timerRef.current as unknown as any);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timerRef.current as unknown as any);
    setTimer(0);
  };

  const TimerComponent = () => {
    const s = Math.floor(timer / 100);
    const m = Math.floor(s / 60);
    return (
      <div>
        {m}:{s % 60}
      </div>
    );
  };
  return { TimerComponent, handleStart, handlePause, handleReset };
};

const Player = () => {
  const {
    TimerComponent: Timer,
    handleStart,
    handlePause,
    handleReset,
  } = useTimer();
  return (
    <>
      <YouTube
        videoId="ImuWa3SJulY"
        onPlay={handleStart}
        onPause={handlePause}
        onEnd={handleReset}
      ></YouTube>
      <Timer />
    </>
  );
};

export default function Home() {
  const 소절 = 가사.split("\n");
  const [isplay, setIsplay] = useState(false);
  return (
    <>
      <div className="flex">
        <Image
          src="/TBH.jpg"
          alt="고민중독"
          width={991}
          height={991}
          className="rounded-3xl"
        />

        <div>
          <div className="m-30" />
          <Player />

          <button
            className="border rounded-3xl w-8 h-8 bg-gray-100 border-gray-300"
            onClick={() => {
              setIsplay(!isplay);
            }}
          >
            {isplay ? "■" : "▶"}
          </button>
          {소절.map((v, i) => {
            let flag = false;
            return (
              <div key={i}>
                {v.split("").map((w, j) => {
                  if (w === "\\") {
                    flag = !flag;
                    return <></>;
                  }
                  return (
                    <motion.span
                      className="font-bold text-gray-400"
                      variants={{
                        first: { color: "gray" },
                        animateEnd: {
                          color: "#0000cc",
                          background: flag ? "#7777cc" : "white",
                        },
                      }}
                      initial="first"
                      animate="animateEnd"
                      transition={{
                        delay: i + j / v.length,
                      }}
                      key={`${i}.${j}`}
                    >
                      {w}
                    </motion.span>
                  );
                })}
              </div>
            );
            return (
              <motion.div
                className="font-bold text-gray-400"
                key={`${v}${i}`}
                variants={{
                  first: { color: "gray" },
                  animateEnd: { color: "blue" },
                }}
                initial="first"
                animate="animateEnd"
                transition={{
                  ease: "linear",
                  duration: 1, // 애니메이션이 총 걸리는 시간
                  delay: i, // 처음 애니메이션 delay
                }}
              >
                &nbsp;
                {v}
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
