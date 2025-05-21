"use client";

import { motion } from "framer-motion";
import { Player } from "./Player";
import data from "../admin/TBH.json";
import { useState } from "react";
import { useTimer } from "@/context/Timer";

const Page = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const timer = useTimer();
  return (
    <>
      <div className="w-2 h-4 flex items-start justify-end absolute right-0">
        <button
          onClick={toggleOpen}
          className="cursor-pointer bg-sky-50 mt-[40dvh] w-16 mw-16 p-8 py-4 rounded-bl-lg"
        >
          {open ? ">" : "<"}
        </button>
        {open ? (
          <div className="w-[25dvw] min-w-[25dvw] h-dvh bg-sky-50 p-4">
            {data.map((v, i) => {
              return (
                <div key={i}>
                  {v.소절.map((w, j) => (
                    <motion.span
                      className="font-bold text-gray-400 bg-sky-50 py-[1px]"
                      style={
                        j == 0
                          ? j == v.소절.length - 1
                            ? {}
                            : { paddingLeft: "3px" }
                          : j == v.소절.length - 1
                          ? { paddingRight: "3px" }
                          : {}
                      }
                      variants={{
                        first: { color: "gray" },
                        animateEnd: {
                          color: "#3030cc",
                          background:
                            w.응원 !== " " ||
                            (w.응원 === " " && j && v.소절[j - 1].응원 !== " ")
                              ? "var(--color-green-400)"
                              : "var(--color-pink-300)",
                          borderTopLeftRadius: j == 0 ? "4px" : "0px",
                          borderTopRightRadius:
                            j == v.소절.length - 1 ? "4px" : "0px",
                          borderBottomLeftRadius: j == 0 ? "4px" : "0px",
                          borderBottomRightRadius:
                            j == v.소절.length - 1 ? "4px" : "0px",
                        },
                      }}
                      initial="first"
                      animate="animateEnd"
                      transition={{
                        delay: w.시간 - timer.time,
                        duration: 0,
                        // duration: w.박자 / 10,
                        ease: "easeInOut",
                      }}
                      key={`${i}.${j}`}
                    >
                      {w.응원 === " " ? w.가사 : w.응원}
                    </motion.span>
                  ))}
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex p-20 pt-12">
        <div>
          <div className="flex justify-between">
            <div className="font-bold text-2xl">고민중독</div>
            <button
              onClick={toggleOpen}
              className="
        cursor-pointer w-32 h-8 min-w-32 flex border-2 border-blue-500 rounded-2xl items-center justify-center hover:bg-sky-500"
            >
              <div>가사 전체 보기</div>
            </button>
          </div>
          <p className="h-2"></p>
          <Player data={data} timer={timer} />
        </div>
      </div>
    </>
  );
};

export default Page;
