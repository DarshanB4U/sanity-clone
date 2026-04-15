import React from "react";
import Button from "./Button";

function Menu() {
    const menuItems = ["Products"
,"Solutions"
,"Resources",
"Docs",
"Enterprise",
"Pricing"];
  return (
    <div className="flex items-center  font-(family-name:--font-ibm-plex-mono) text-white gap-3">
        {menuItems.map((item) => (
            <Button key={item} className="hover:bg-neutral-900 hover:text-white border-0 cursor-pointer transition-colors">
                {item}
            </Button>
        ))}
    </div>
  );
}

export default Menu;
