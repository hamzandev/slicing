import Image from "next/image";
import logo from "../public/assets/logo.png";
import NavLink from "./NavLink";
import Button from "./Button";
import { useState } from "react";
import menu from "../public/assets/humburger.png";
import Link from "next/link";

export default function Navbar() {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <nav className="px-5 w-full shadow bg-gray-50/60 backdrop-blur-md py-4 flex items-center z-10 fixed">
      <div className="container mx-auto lg:flex items-center justify-between">
        <div className="logo flex justify-between items-center">
          <Link href={"/"} className="img-logo w-1/3 lg:w-full md:w-[90%]">
            <Image src={logo} alt="logo" />
          </Link>
          <button
            onClick={() => setIsShowed(!isShowed)}
            className="flex lg:hidden flex-col w-10 order p-1"
          >
            <Image src={menu} alt="menu-humburger" />
          </button>
        </div>
        <div
          className={`duration-200 transition-transform links-menu flex lg:flex-row flex-col py-5 lg:items-center lg:p-0 px-3 gap-10 ${
            isShowed ? "flex" : "hidden"
          }`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#products">Products</NavLink>
          <NavLink to="#features">Features</NavLink>
          <Link to="/blog">Blog</Link>
        </div>
        <div
          className={`flex lg:flex-row flex-col gap-3 ${
            isShowed ? "flex" : "hidden"
          }`}
        >
          <form className="flex items-center">
            <input
              type="search"
              name="search"
              className="px-6 py-3 w-full rounded border focus:outline-primary border-gray-300"
              placeholder="Search Here..."
            />
          </form>
          <Button to="#contact">Contact Us</Button>
        </div>

        <div
          className={`duration-200 transition-transform links-menu lg:flex hidden py-5 lg:items-center lg:p-0 px-3 gap-10`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="#about">About</NavLink>
          <NavLink to="#products">Products</NavLink>
          <NavLink to="#features">Features</NavLink>
          <Link to="/blog">Blog</Link>
        </div>
        <div className={`lg:flex hidden lg:flex-row flex-col gap-3 `}>
          <form className="flex items-center">
            <input
              type="search"
              name="search"
              className="px-6 py-3 w-full rounded border focus:outline-primary border-gray-300"
              placeholder="Search Here..."
            />
          </form>
          <Button to="#contact">Contact Us</Button>
        </div>
      </div>
    </nav>
  );
}
