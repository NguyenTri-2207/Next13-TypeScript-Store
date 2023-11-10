import React, { useState, useRef, useEffect } from "react";

interface EnumServiceItem {
  id: number;
  name: string;
  url: string;
}
const Submenu: React.FC<{ dataSubMenu: EnumServiceItem[] }> = (dataSubMenu) => {
  const [columns, setColumns] = useState("col-2");

  return (
    <aside>
      <h4>a</h4>
      <div className={`submenu-center ${columns}`}>
        {/* {dataSubMenu.map((link, index) => {
          const { label, url, icon } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })} */}
      </div>
    </aside>
  );
};

export default Submenu;
