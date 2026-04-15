"use client";
import { useState, useEffect, use } from "react";
import SanityLogo from "./SanityLogo";
import Menu from "./Menu";
import Button from "./Button";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 w-full z-200 box-border flex h-16.75 items-center justify-items-center transition-colors duration-300 ${
      isScrolled ? "bg-black" : "hover:bg-black bg-transparent"
    }`}>
      <div className="  group w-full py-2 mx-2 flex items-center justify-between ">
        <SanityLogo></SanityLogo>
        <Menu></Menu>
        <div className="flex items-center  h-full  gap-4">
          <Button>CONTACT SALES</Button>
          <Button className="bg-[#ff4100] border-0 text-black hover:text-[#ff4100] ">
            DASHBOARD
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
// 