"use client";
import { useState } from "react";
import Link from "next/link";
import hamburguerMenu from "@/assets/icons/hamburguermenu.svg";
import closeIcon from "@/assets/icons/closeicon.svg";
import magnifierIcon from "@/assets/icons/maagnifier.svg";
import Icon from "../icon";

const Navbar = () => {
  const [nav, setNav] = useState<Boolean>(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="flex fixed justify-between p-4 top-0 items-center bg-dark-bg-color w-full z-50">
      <div className="w-full flex justify-between md:px-12">
        <span className="lg:hidden">
          <Icon
            height={25}
            width={30}
            onClick={handleClick}
            image={hamburguerMenu}
            alt="hamburguermenu"
          />
        </span>
        <div className="flex items-center gap-16">
          <h2 className="italic font-black text-2xl text-dark-text-color">
            TestCasino
          </h2>
          <ul className="hidden lg:flex gap-6">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/livecasino">
              <li>Features</li>
            </Link>
            <Link href="/sportscasino">
              <li>Products</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-4 h-[40px] cursor-pointer">
          <span className="flex p-2 rounded-lg md:bg-s-btn-color">
            <Icon height={25} width={28} image={magnifierIcon} alt="search" />
          </span>
          <span className="hidden md:flex gap-4 ">
            <button className="rounded-md bg-s-btn-color px-6 active:scale-95">
              Login
            </button>
            <button className="rounded-md  bg-p-btn-color px-6 active:scale-95 whitespace-nowrap">
              Join us
            </button>
          </span>
        </div>
      </div>
      <aside
        className={`${
          nav
            ? "text-white  transform translate-x-1/2"
            : "opacity-0 transform -translate-x-full"
        } transition-transform absolute top-0 right-1/2 w-full h-screen  bg-transparent flex justify-start items-start text-2xl `}
        onClick={() => setNav(false)}
      >
        <div className=" bg-dark-bg-color z-50 w-2/3 h-full px-6 py-8">
          <div className="flex flex-col justify-between h-1/2">
            <div className="flex justify-between w-full">
              <h2 className="italic font-black text-2xl">TestCasino</h2>
              <Icon
                height={30}
                width={30}
                image={closeIcon}
                alt="closeicon"
                onClick={handleClick}
              />
            </div>
            <ul className="flex flex-col gap-6">
              <li className="text-lg">
                <Link href="/">Casino</Link>
              </li>
              <li className="text-lg">
                <Link href="/livecasino">Live Casino</Link>
              </li>
              <li className="text-lg">
                <Link href="/sportscasino">Sports Casino</Link>
              </li>
            </ul>
            <div className="flex flex-col w-full h-32 gap-4"></div>
          </div>
        </div>
        <div className="w-1/3 h-full bg-dark-bg-color opacity-75"></div>
      </aside>
    </nav>
  );
};

export default Navbar;
