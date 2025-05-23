"use client";

import React, { useState } from "react";
import { A } from "./lyrics";
import { 별하 } from "./별하";
import { 대관람차 } from "./대관람차";
import { discord } from "./디코";
import { 수다 } from "./수다";
import { 달리기 } from "./달리기";
import { 사랑하자 } from "./사자";
import { 메아리 } from "./메아리";
import { 맑음 } from "./맑음";
import { 짭돌 } from "./짭돌";
import { bye } from "./안나슬";
import { 고중 } from "./고민중독";
import { soda } from "./SODA";
import { 지구정복 } from "./지구정복";
import { 자유선언 } from "./자유선언";
import { 마니또 } from "./마니또";

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
    track: [
      "눈물참기",
      "행복해져라",
      "검색어는 QWER",
      "OVERDRIVE",
      "D-DAY",
      "Yours sincerely",
    ],
    bgColor: "#E9A4C7",
    color: "white",
  },
};

const datas: { [key: string]: string[] } = {
  "별의 하모니": 별하,
  Discord: discord,
  "수수께끼 다이어리": 수다,
  SODA: soda,
  고민중독: 고중,
  지구정복: 지구정복,
  자유선언: 자유선언,
  불꽃놀이: [
    "https://gall.dcinside.com/mgallery/board/view/?id=qwer_fan&no=470849",
  ],
  마니또: 마니또,
  대관람차: 대관람차,
  "가짜 아이돌": 짭돌,
  "내이름 맑음": 맑음,
  사랑하자: 사랑하자,
  "안녕, 나의 슬픔": bye,
  달리기: 달리기,
  메아리: 메아리,
  눈물참기: ["준비중.."],
  행복해져라: ["준비중.."],
  "검색어는 QWER": ["준비중.."],
  OVERDRIVE: ["준비중.."],
  "D-DAY": ["준비중.."],
  "Yours sincerely": ["준비중.."],
};

export const Call = ({
  title,
}: {
  title: "discord" | "manito" | "mynameishina" | "r";
}) => {
  const [selected, setSelected] = useState("");
  const trackList = data[title].track;

  return (
    <div className="w-full h-full flex">
      <div className="w-40 min-w-40 bg-amber-200 h-fit">
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
      <A data={datas[selected]}></A>
    </div>
  );
};
