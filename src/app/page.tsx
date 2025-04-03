"use client";

import Image from "next/image";
import { 가사 } from "./TBH";
import { useState } from "react";

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
          <button
            className="border rounded-3xl w-8 h-8 bg-gray-100 border-gray-300"
            onClick={() => {
              setIsplay(!isplay);
            }}
          >
            {isplay ? "■" : "▶"}
          </button>
          {소절.map((v, i) => {
            return (
              <div className="font-bold text-gray-400" key={`${v}${i}`}>
                &nbsp;
                {v}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
