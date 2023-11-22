"use client";
import React, { useState, useRef, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./page.module.scss";
import { BiChevronRight } from "react-icons/bi";
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
const Menu: React.FC<{ dataMenu: EnumServiceItem[] }> = ({ dataMenu }) => {
  const [show, setShow] = useState<boolean | null>(false);
  const [showSubMenu, setShowSubMenu] = useState<number | null>(null);

  return (
    <nav className="block lg:hidden fixed top-0 left-0 z-50 w-full bg-white shadow-md ">
      <div className="container ">
        <div className="flex items-center justify-between py-4 gap-x-2 ">
          <div className=" ">
            <Link href="/">
              <Image
                alt="a"
                src="https://bbcincorp.com/assets/images/layout/logo_black-hk-layout.svg"
                width={139}
                height={37}
              />
            </Link>
          </div>

          <div
            className="flex h-7 cursor-pointer flex-col justify-around bg-transparent "
            onClick={() => setShow(!show)}
          >
            <div
              style={{ transformOrigin: "1px" }}
              className={` ${show ? " rotate-45" : ""}
            block h-0.5 w-7 rounded-sm bg-gray-500 transition-all`}
            ></div>
            <div
              className={` ${show ? "opacity-0" : "opacity-1"}
            block h-0.5 w-7 rounded-sm bg-gray-500 transition-all`}
            ></div>
            <div
              style={{ transformOrigin: "1px" }}
              className={`  ${show ? " -rotate-45" : ""}
            block h-0.5 w-7 rounded-sm bg-gray-500 transition-all`}
            ></div>
          </div>
        </div>
        {
          <div
            style={{ height: show ? "70vh" : "0" }}
            className="bg-white w-full sticky transition-all duration-300 overflow-hidden "
          >
            <ul className=" relative  overflow-y-auto h-full pt-4">
              {dataMenu?.map((item, index) => {
                const showSubMenuData = dataMenu[index]?.subMenu;
                return (
                  <li key={index} className={`  px-4  relative `}>
                    <div className="flex justify-between mb-4">
                      {showSubMenuData ? (
                        <div
                          className="flex justify-between  w-full"
                          onClick={() =>
                            setShowSubMenu(
                              showSubMenu === item.id ? null : item.id
                            )
                          }
                        >
                          <span className="hover:text-blue-600 cursor-pointer">
                            {item.name}
                          </span>
                          <IoIosArrowDown
                            size={18}
                            className={`${
                              showSubMenu === item.id ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ) : (
                        <a
                          href={item.url}
                          className="hover:text-blue-600 cursor-pointer"
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                    {/* subMenu */}
                    {dataMenu[index]?.subMenu && (
                      <div
                        className={`${
                          showSubMenu === item.id ? "max-h-screen " : "max-h-0 "
                        }   z-50 rounded-xl transition-height duration-300 ease-in-out  overflow-hidden`}
                      >
                        <div className="mb-4">
                          {dataMenu[index]?.subMenu?.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="pb-4  last:pb-0   justify-center items-center"
                              >
                                <div className="flex">
                                  <div className="mr-2"> {item.icon}</div>
                                  <div>{item.label}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        }
      </div>
    </nav>
  );
};

export default Menu;
