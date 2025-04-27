"use client";

import { motion } from "framer-motion";
import { Player } from "./Player";
import data from "./admin/TBH.json";
import { useState } from "react";

export const Page = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
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
                      className="font-bold text-gray-400 bg-sky-50"
                      variants={{
                        first: { color: "gray" },
                        animateEnd: {
                          color: "#3030cc",
                          background:
                            w.응원 !== " " ||
                            (w.응원 === " " && j && v.소절[j - 1].응원 !== " ")
                              ? "var(--color-green-400)"
                              : "var(--color-pink-300)",
                        },
                      }}
                      initial="first"
                      animate="animateEnd"
                      transition={{
                        delay: w.시간 - 20,
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
      <div className="flex p-20">
        <div>
          <button
            onClick={toggleOpen}
            className="
        cursor-pointer w-32 h-8 min-w-32 flex border-2 border-blue-500 rounded-2xl items-center justify-center hover:bg-sky-500 self-start justify-self-end"
          >
            <div>가사 전체 보기</div>
          </button>
          <p className="h-2"></p>
          <Player data={data} />
        </div>
      </div>
    </>
  );
};

export default Page;
