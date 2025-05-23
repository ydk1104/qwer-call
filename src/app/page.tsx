"use client";

import Link from "next/link";

// const data = [
//   {
//     text: "Harmony from Discord",
//     color: "red",
//   },
// ];

const Card1 = () => {
  return (
    <Link href="/call/discord">
      <div className="w-32 h-20 rounded-2xl bg-[#E9A4C7] text-white text-center flex items-center">
        Harmony from Discord
      </div>
    </Link>
  );
};
const Card2 = () => {
  return (
    <Link href="/call/manito">
      <div className="w-32 h-20 rounded-2xl bg-[#3C93CA] text-[#ef87b5] text-center flex items-center">
        <div className="w-full">MANITO</div>
      </div>
    </Link>
  );
};
const Card3 = () => {
  return (
    <Link href="/call/mynameishina">
      <div className="w-32 h-20 rounded-2xl bg-[#F8DF74] text-[#06bded] text-center flex items-center">
        Algorithm’s Blossom
      </div>
    </Link>
  );
};
const Card4 = () => {
  return (
    <Link href="/call/r">
      <div className="w-32 h-20 rounded-2xl bg-[#8258FA] text-[#c3d773] text-center flex items-center">
        난 네 편이야, 온 세상이 불협일지라도
      </div>
    </Link>
  );
};

const Card5 = () => {
  return (
    <Link href="/call/etc">
      <div className="w-32 h-20 rounded-2xl bg-[#8258FA] text-[#c3d773] text-center flex items-center">
        기타 노래
      </div>
    </Link>
  );
};

const Page = () => {
  return (
    <div>
      <div className="flex">
        <Card1 />
        <Card2 />
      </div>
      <div className="flex">
        <Card3 />
        <Card4 />
      </div>
      <Card5 />
    </div>
  );
};

export default Page;
