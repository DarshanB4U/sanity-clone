"use client";
import { useState, useEffect, use } from "react";
import SanityLogo from "./SanityLogo";
import Menu from "./Menu";
import Button from "./Button";
import NavbarCard from "./NavbarCard";

export interface Content {
  title: string;
  items: Record<string, string>;
}

function Navbar() {
  const menuItems = [
    "Products",
    "Solutions",
    "Resources",
    "Docs",
    "Enterprise",
    "Pricing",
  ];

  const menuContent: Record<string, Array<Content>> = {
    Products: [
      {
        title: "Content Opration",
        items: {
          Studio: "#",
          Content_Agent: "#",

          App_SDK: "#",
          Media_Library: "#",
          Content_Releases: "#",
          Agent_API: "#",
        },
      },
      {
        title: "Content_Backend",
        items: {
          Content_Lake: "#",
          Agent_Context: "#",
          MCP_Server: "#",
          Compute: "#",
          Live_CDN: "#",
        },
      },
    ],
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
  function handleMenuItemSelect(itemName: string|null) {
    setSelectedMenuItem(itemName);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-200 box-border flex flex-col h-16   items-center justify-items-center transition-colors duration-300 ${
        isScrolled ? "bg-black" : "hover:bg-black bg-transparent"
      }`}
    >
      <div className=" group w-full py-2 mx-2 mt-1 flex items-center justify-between ">
        <SanityLogo></SanityLogo>
        <Menu
          handleMenuItemSelect={handleMenuItemSelect}
          menuItems={menuItems}
        ></Menu>
        <div className="flex items-center justify-center  h-full  gap-4">
          <Button>CONTACT SALES</Button>
          <Button className="bg-[#ff4100] border-0 text-black hover:text-[#ff4100] ">
            DASHBOARD
          </Button>
        </div>
      </div>
      {selectedMenuItem == null ? null : (
        <NavbarCard content={menuContent[selectedMenuItem]}></NavbarCard>
      )}
    </div>
  );
}

export default Navbar;
//
