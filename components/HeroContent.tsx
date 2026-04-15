import React from "react";
import Button from "./Button";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function HeroContent() {
  return (
    <div
      className={`${inter.className}  absolute bg-transparent   py-18 p-4  h-full w-full flex flex-col    items-start justify-center gap-12 `}
    >
      <div className="text-[112px]  leading-[1.1] font-medium   w-5xl   text-white/90">
        Structure powers intelligence
      </div>
      <div className="text-xl text-wrap   w-lg  leading-[1.1] font-medium text-white/90">
        The back-end built for AI content operations. Power web, mobile, and
        agentic applications at scale.
      </div>
      <div className="flex items-center    gap-2 ">
        <Button className="bg-[#ff4100]   text-xl px-8 font-sans shadow-3xl shadow-black text-shadow-xl  py-3  text border-0 text-black hover:text-[#ff4100] ">
          Start building
        </Button>
        <Button className="text-xl px-8 py-2.5  font-sans text-shadow-2xl  shadow-black">
          Get a demo
        </Button>
      </div>
    </div>
  );
}

export default HeroContent;
