import Image from "next/image";
import NavLink from "./NavLink";

import fb from "../public/assets/fb.svg";
import skype from "../public/assets/skype.svg";
import linkedin from "../public/assets/linkedin.svg";
import ig from "../public/assets/ig.svg";
import logo from "../public/assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex mt-10 flex-col bg-white">
      <div className="logo mt-10 mb-5">
        <Image src={logo} alt="logo" className="mx-auto" />
      </div>
      <div className="container font-poppins mx-auto gap-10 lg:px-20 px-8 py-10 grid lg:grid-cols-3">
        <div className="left grid">
          <h3 className="text-xl text-secondary mb-3">Social Contacts</h3>
          <a
            target={"_blank"}
            className="text-sm text-gray-600"
            rel="noreferrer"
            href={"https://instagram.com/hamzanwahyu.me/"}
          >
            +6285-237-082-602
          </a>
          <a
            target={"_blank"}
            className="text-sm text-gray-600"
            rel="noreferrer"
            href={"https://instagram.com/hamzanwahyu.me/"}
          >
            hamzankechil@gmail.com
          </a>
          <a
            target={"_blank"}
            className="text-sm text-gray-600"
            rel="noreferrer"
            href={"https://wa.me/6285237082602/"}
          >
            wa.me/6285237082602
          </a>
        </div>
        <div className="right grid gap-5 text-gray-400">
          <h3 className="text-xl mb-3 text-secondary">Our Company</h3>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
        </div>
        <div className="last grid gap-1">
          <h3 className="text-xl text-secondary">Address</h3>
          <p className="text-gray-500">
            Jl. Sumbawa - Bima KM 25, Dusun Kabuyit Barat, Desa Langam,
            Kecamatan Lopok Kabupaten Sumbawa, NTB, Indonesia.
          </p>
          <h3 className="text-xl text-secondary">Follow Us</h3>
          <div className="flex gap-3">
            <a href="#">
              <Image src={fb} alt="icon" />
            </a>
            <a href="#">
              <Image src={linkedin} alt="icon" />
            </a>
            <a href="#">
              <Image src={skype} alt="icon" />
            </a>
            <a href="#">
              <Image src={ig} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
