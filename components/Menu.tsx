import { useState } from "react";
import Button from "./Button";

function Menu({
  menuItems,
  handleMenuItemSelect,
}: {
  menuItems: string[];
  handleMenuItemSelect: (args: string | null) => void;
}) {
  return (
    <div className="flex items-center  font-(family-name:--font-ibm-plex-mono)  text-white gap-3">
      {menuItems.map((item) => (
        <Button
          onMouseEnter={() => {
            handleMenuItemSelect(item);
          }}
          onMouseLeave={() => handleMenuItemSelect(null)}
          key={item}
          className="hover:bg-neutral-900 hover:text-white border-0 cursor-pointer uppercase text-[13px] transition-colors"
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

export default Menu;
