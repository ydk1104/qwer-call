import { TimerObj } from "@/context/Timer";
import YouTube from "react-youtube";

const A = (
  v: { 가사: string; 응원: string; 박자: number },
  emoji: boolean,
  key: string
) => {
  return (
    <div className="flex-col w-4 text-lg" key={key}>
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
  timer,
  videoId = "ImuWa3SJulY",
}: {
  data?: 데이터[];
  timer: TimerObj;
  videoId?: string;
}) => {
  const { handleStart, handlePause, handleReset, time } = timer;
  const current소절 = (data || []).reduce((prev, curr) => {
    return time <= curr.시작시간 ? prev : curr;
  });
  let i = 0;
  while (time >= current소절.소절[i]?.시간) i++;
  i--;
  return (
    <>
      <YouTube
        videoId={videoId}
        onPlay={handleStart}
        onPause={handlePause}
        onEnd={handleReset}
      ></YouTube>
      <p className="h-2"></p>
      <div className="flex text-lg">
        <div className="flex-col text-lg">
          <div className="bg-pink-300 rounded-sm px-2">QWER</div>
          <div className="bg-green-400 rounded-sm px-2">바위게</div>
        </div>
        <div className="h-16 border-[1px] mx-2"></div>
        {current소절.소절.map((v, j) => A(v, i == j, `${v.가사}${j}`))}
      </div>
    </>
  );
};
