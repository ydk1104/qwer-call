/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useMemo, useRef, useState } from "react";
import YouTube from "react-youtube";
import Image from "next/image";

export const useTimer = () => {
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
  return {
    TimerComponent,
    handleStart,
    handlePause,
    handleReset,
    time: timer / 100,
  };
};

const A = (v: { 가사: string; 응원: string; 박자: number }, emoji: boolean) => {
  return (
    <div className="flex-col w-4 text-lg">
      <div>{v.가사}</div>
      <div>{v.응원}</div>
      {emoji ? <div>냥</div> : <></>}
      {/* <Image
        src="/meow_blob.png"
        alt="냥"
        width={16}
        height={16}
        hidden={!emoji}
      /> */}
    </div>
  );
};

interface 음절 {
  가사: string;
  응원: string;
  박자: number;
  시간: number;
}

interface 데이터 {
  소절: 음절[];
  시작시간: number;
}

export const Player = ({
  data,
  videoId = "ImuWa3SJulY",
}: {
  data?: 데이터[];
  videoId?: string;
}) => {
  const {
    TimerComponent: Timer,
    handleStart,
    handlePause,
    handleReset,
    time,
  } = useTimer();
  const current소절 = (data || []).reduce((prev, curr) => {
    return time <= curr.시작시간 ? prev : curr;
  });
  let i = 0;
  while (time >= current소절.소절[i]?.시간) i++;
  i--;
  // console.log(current소절);
  return (
    <>
      <YouTube
        videoId={videoId}
        onPlay={handleStart}
        onPause={handlePause}
        onEnd={handleReset}
      ></YouTube>
      <Timer />
      <div className="flex text-lg">
        <div className="flex-col text-lg">
          <div className="bg-pink-300 rounded-sm px-2">QWER</div>
          <div className="bg-green-400 rounded-sm px-2">바위게</div>
        </div>
        <div className="h-16 border-[1px] mx-2"></div>
        {current소절.소절.map((v, j) => A(v, i == j))}
      </div>
    </>
  );
};
