import Image from "next/image";
import style from "../styles/Banner.module.css";
import banner from "../public/assets/banner.svg";

export default function Banner() {
  return (
    <div
      className={`banner-wrapper flex sm:flex-col flex-col-reverse lg:gap-14 gap-5 lg:pt-28 md:pt-24 pt-14 min-h-screen bg-gray-50 ${style.bgImage}`}
    >
      <div className="typography mx-auto lg:w-3/5 py-5 lg:p-0 px-3 flex flex-col gap-8">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-poppins text-center font-bold text-gray-800">
          We Create Simple Solution For Your Complex Task
        </h1>
        <p className="text-baseText font-poppins text-center">
          Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec
          elaboraret interpretaris, sed diceret concludaturque no. Verear
          habemus sea ut
        </p>
        <div className="buttons flex sm:flex-row flex-col lg:gap-8 gap-3 lg:p-0 px-5 justify-center">
          <button
            className="px-12 border-2 border-indigo-400 font-poppins py-4 rounded bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 duration-150 text-gray-100"
            to={"/work"}
          >
            Our Work
          </button>
          <button
            className="px-12 font-poppins duration-150 hover:bg-gradient-to-r from-indigo-600 to-purple-600 hover:text-gray-100 py-4 rounded bg-transparent border-2 border-primary text-primary"
            to={"/about"}
          >
            Know More
          </button>
        </div>
      </div>
      <div className="ilustration sm:mt-3 mx-auto ">
        <Image src={banner} alt="banner image" />
      </div>
    </div>
  );
}
