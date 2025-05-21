import React from "react";
import { Call } from "./Call";

const titles = ["discord", "manito", "mynameishina", "r"];

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return titles.map((title: string) => ({ title: title }));
}

const Page = ({
  params,
}: {
  params: Promise<{ title: "discord" | "manito" | "mynameishina" | "r" }>;
}) => {
  const param = React.use(params);

  return <Call title={param.title}></Call>;
};

export default Page;
