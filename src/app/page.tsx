"use client";

import Image from "next/image";
import { 가사 } from "./TBH";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const 소절 = 가사.split("\n");
  const [isplay, setIsplay] = useState(false);
  return (
    <>
      <div className="flex">
        <Image
          src="TBH.jpg"
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
