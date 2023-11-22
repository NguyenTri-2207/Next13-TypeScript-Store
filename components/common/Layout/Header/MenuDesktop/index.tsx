"use client";
import React, { useState, useRef, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";
import styles from "./page.module.scss";
import { BiChevronRight } from "react-icons/bi";
import { FaCoffee } from "react-icons/fa";
import FormLogin from "@/components/molecules/FormLogin";
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
const MenuDesktop: React.FC<{ dataMenu: EnumServiceItem[] }> = ({
  dataMenu,
}) => {
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverHight, setPopoverHight] = useState<number | null>(null);
  const calculatedWidth =
    hovering === 1 ? 600 : hovering === 2 ? 500 : hovering === 3 ? 450 : 600; //
  const calculatedHeight =
    hovering === 1 ? 600 : hovering === 2 ? 500 : hovering === 3 ? 450 : 600; //

  return (
    <>
      <nav
        className="hidden lg:block fixed w-full z-50 bg-white"
        onMouseEnter={() => setHovering(null)}
      >
        <div className="container ">
          <div className="grid grid-cols-12   items-center justify-between py-4 gap-x-2 ">
            <div className="lg:col-span-2 w-[200px]">
              <Link href="/">
                <Image
                  alt="a"
                  src="https://bbcincorp.com/assets/images/layout/logo_black-hk-layout.svg"
                  width={139}
                  height={37}
                />
              </Link>
            </div>
            <ul className="lg:col-span-7 flex relative ">
              {dataMenu?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      item.subMenu && styles.li
                    }  px-4  relative z-50 ${hovering == item.id && " "} `}
                    onMouseLeave={() => {
                      setHovering(null);
                    }}
                    onMouseEnter={(event: MouseEvent) => {
                      const target = event.currentTarget as HTMLElement;

                      setHovering(item.subMenu ? item?.id : null);
                      setPopoverLeft(target.offsetLeft + 40);
                    }}
                  >
                    <a
                      href={item.url}
                      className="hover:text-blue-600 cursor-pointer"
                    >
                      {item.name}
                    </a>
                    {/* subMenu */}

                    {dataMenu[index]?.subMenu && (
                      <div
                        style={{
                          width: calculatedWidth,
                          height: calculatedHeight,
                        }}
                        className={` bg-white p-4 z-50 left-1/2 -translate-x-1/2  overflow-hidden rounded-xl shadow-lg absolute top-14  transition-all ease-in duration-300 ${styles.subMenu} `}
                      >
                        {dataMenu[index]?.subMenu?.map((item, index) => {
                          return (
                            <div
                              style={{ left: popoverLeft ?? 0 }}
                              key={index}
                              className="py-3 last:pb-0  justify-center border-b last:border-0 border-gray-400 "
                            >
                              <div className="flex  mb-3">
                                <div>
                                  <div
                                    className={
                                      styles.iconcontainer + " shadow mr-4"
                                    }
                                  >
                                    {item.icon}
                                  </div>
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-600 pb-2 pt-2">
                                    {item.label}
                                  </div>
                                  <div className=" line-clamp-1">
                                    {item?.desc}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              })}
              {/* arrow */}
              {
                <div
                  style={{
                    left: popoverLeft ?? 0,
                  }}
                  className={`${styles.triangle} absolute   transition-all duration-400 `}
                ></div>
              }
            </ul>
            <div className="lg:col-span-3 flex justify-between ">
              <Link
                href="/lien-he"
                className="flex items-center  justify-between px-4 rounded-full py-1 mr-4 group "
              >
                <span className="mr-1 group-hover:opacity-50 ">Contact</span>

                <BiChevronRight className="group-hover:opacity-20 group-hover:w-5  transition-all duration-200" />
              </Link>
              <FormLogin />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuDesktop;
