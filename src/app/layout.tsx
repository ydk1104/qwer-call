import { GoogleAnalytics } from "@next/third-parties/google";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QWER call",
  description: "QWER call guide site",
};

const Navibar = () => {
  return (
    <div className="w-full h-16 bg-indigo-200 px-64 flex items-center gap-12">
      <div className=" text-xl text-center">
        <Link href="/">응원법만 보기</Link>
      </div>
      <div className=" text-xl text-center">
        <Link href="/video">영상으로 보기</Link>
      </div>
      <div className=" text-xl text-center">
        <Link
          href="https://docs.google.com/spreadsheets/d/1aHJ5ITDPQ-5Py9gyYRyIcp6iTSvhfa7xiOh28DmXlhk/edit?gid=419099905#gid=419099905"
          target="_blank"
        >
          응원법 제안 / 건의사항
        </Link>
      </div>
      {/* <div className=" text-xl text-center">
        <Link href="/">건의사항</Link>
      </div> */}
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navibar></Navibar>
        {/* <div className="bg-[url(/MANITO.webp)] bg-no-repeat w-dvw h-dvh bg-cover"> */}
        <div className="bg-sky-100 w-full h-dvh flex flex-col m-auto text-center items-center">
          <div className="font-bold text-3xl mt-4">
            🤍 🩷 QWER 응원법 가이드 사이트 💙 💚
          </div>
          <div className=" text-red-400 font-bold text-xl">
            !! 비공식 사이트입니다 !!
          </div>
          <div>
            공식 응원법 안내는{" "}
            <Link
              href={"https://cafe.naver.com/eggkim/268484"}
              className="text-blue-500"
              target="_blank"
            >
              카페 게시물
            </Link>
            을 참고해주세요!
          </div>
          {children}
        </div>
      </body>
      <GoogleAnalytics gaId="G-70BRCWTWP4" />
    </html>
  );
}
