"use client";

import { Editor } from "./Editor";
import data from "./TBH.json";

const Header = () => {
  return <div className="flex"></div>;
};

const Footer = () => {
  return <div className="flex"></div>;
};

export default function main() {
  return (
    <div className="p-12">
      <Header />
      <Editor data={data}></Editor>
      <Footer />
    </div>
  );
}
