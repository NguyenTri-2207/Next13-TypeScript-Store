import React, { ReactNode } from "react";
import Menu from "@/components/common/Layout/Header/Menu";
import MenuDesktop from "@/components/common/Layout/Header/MenuDesktop";
import dataMenu from "../data.js";
interface SubMenu {
  label: string;
  desc?: string;
  icon: ReactNode;
}
interface EnumServiceItem {
  id: number;
  name: string;
  url: string;
  subMenu?: SubMenu[];
}
function Header() {
  const dataJson: EnumServiceItem[] = dataMenu;
  return (
    <div>
      <Menu dataMenu={dataJson} />
      <MenuDesktop dataMenu={dataJson} />
    </div>
  );
}

export default Header;
