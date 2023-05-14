import Link from "next/link";
import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { HiOutlineShieldCheck } from "react-icons/hi";
const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 !z-50 flex items-center justify-between py-4 px-6 bg-dark_blue h-[80px]">
      <div className="flex items-center space-x-3">
        <HiOutlineShieldCheck className="text-4xl text-green-600" />
        <span className="text-2xl cursor-pointer font-bold uppercase hover:text-green-600 transition-all duration-150 tracking-wide">
          Checkie
        </span>
      </div>
      <div className="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search...."
          className="hidden md:flex items-center lg:w-[300px] rounded-xl px-4 border-none outline-none text-black h-[33px] focus:outline focus:outline-green-300"
        />
      </div>
      <div className="flex items-center space-x-7 uppercase">
        <ul className="flex items-center list-none space-x-7 font-semibold text-md text-primary_white">
          <li>
            <Link
              className="hover:text-primary_white/50 transition-all duration-150"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary_white/50 transition-all duration-150"
              href="/"
            >
              Sign Out
            </Link>
          </li>
        </ul>
        <div title="Account" className="cursor-pointer">
          <RiAccountCircleLine className="text-3xl hover:text-primary_white/50 transition-all duration-150" />
        </div>
      </div>
    </header>
  );
};

export default Header;