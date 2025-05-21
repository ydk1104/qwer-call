"use client";

import React, { Usable, useState } from "react";

const data = {
  discord: {
    track: ["별의 하모니", "Discord", "수수께끼 다이어리"],
    bgColor: "#E9A4C7",
    color: "white",
  },
  manito: {
    track: [
      "고민중독",
      "SODA",
      "자유선언",
      "지구정복",
      "대관람차",
      "불꽃놀이",
      "마니또",
    ],
    bgColor: "#E9A4C7",
    color: "white",
  },

  mynameishina: {
    track: [
      "가짜 아이돌",
      "내이름 맑음",
      "사랑하자",
      "달리기",
      "안녕, 나의 슬픔",
      "메아리",
    ],
    bgColor: "#E9A4C7",
    color: "white",
  },
  r: {
    track: ["준비중!!"],
    bgColor: "#E9A4C7",
    color: "white",
  },
};

const links: { [key: string]: string } = {
  "별의 하모니": "후레쉬를 흔들어주세요!",
  Discord: "https://m.cafe.naver.com/eggkim/268484",
  "수수께끼 다이어리": "링크 있으면 찾아주세요 ㅠㅠ",
  SODA: "링크 있으면 찾아주세요 ㅠㅠ",
  고민중독: "https://m.cafe.naver.com/eggkim/268484",
  지구정복:
    "https://gall.dcinside.com/mgallery/board/view/?id=qwer_fan&no=470839",
  자유선언:
    "https://gall.dcinside.com/mgallery/board/view/?id=qwer_fan&no=470843",
  불꽃놀이:
    "https://gall.dcinside.com/mgallery/board/view/?id=qwer_fan&no=470849",
  대관람차:
    "https://gall.dcinside.com/mgallery/board/view/?id=qwer_fan&no=470857",
  "가짜 아이돌":
    "https://gall.dcinside.com/mgallery/board/view/?id=qwer_fan&no=456100",
  "내이름 맑음": "https://m.cafe.naver.com/eggkim/268484",
  사랑하자: "https://gall.dcinside.com/m/qwer_fan/456218",
  "안녕, 나의 슬픔": "후레쉬를 흔들어주세요!",
  달리기: "홍지혜 이아희 외쳐주세요",
  메아리: "누가 아이디어좀",
};

const Page = ({
  params,
}: {
  params: Usable<{ title: "discord" | "manito" | "mynameishina" | "r" }>;
}) => {
  const param = React.use(params);
  const [selected, setSelected] = useState("");
  const trackList = data[param.title].track;

  return (
    <div className="w-full h-full">
      <div className="w-32 bg-amber-200">
        {trackList.map((track) => {
          return (
            <div
              className={`h-16 flex justify-center items-center ${
                track === selected ? "font-bold" : ""
              }`}
              key={track}
              onClick={() => setSelected(track)}
            >
              {track}
            </div>
          );
        })}
      </div>
      <div className="w-full">{links[selected] ?? ""}</div>
    </div>
  );
};

export default Page;
