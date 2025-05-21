/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useRef, useState } from "react";

export interface TimerObj {
  handleStart: (e: any) => void;
  handlePause: (e: any) => void;
  handleReset: (e: any) => void;
  time: number;
}

export const useTimer = (): TimerObj => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState({
    start: Date.now(),
    time: 0,
  });
  const timerRef: RefObject<NodeJS.Timeout | null> = useRef(null);

  const handleStart = (e: any) => {
    const time = Math.ceil(e.target.getCurrentTime() * 1000);
    if (isRunning) return;
    setIsRunning(true);
    setTimer({ start: Date.now() - time, time: time });
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        return {
          start: prev.start,
          time: Date.now() - prev.start,
        };
      });
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
    setTimer({
      start: Date.now(),
      time: 0,
    });
  };

  //   const TimerComponent = () => {
  //     const s = Math.floor(timer.time / 1000);
  //     const m = Math.floor(s / 60);
  //     return (
  //       <div>
  //         {m}:{s % 60}
  //       </div>
  //     );
  //   };
  return {
    // TimerComponent,
    handleStart,
    handlePause,
    handleReset,
    time: timer.time / 1000,
  };
};
