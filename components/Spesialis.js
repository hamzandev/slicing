import SpesialisCard from "./SpesialisCard";
import Image from "next/image";

import satu from "../public/assets/1.svg";
import dua from "../public/assets/2.svg";
import tiga from "../public/assets/3.svg";

import SliderButtons from "./SliderButtons";

export default function Spesialis() {
  return (
    <div id="about" className="spesialis container mx-auto lg:px-20 px-6 mt-10">
      <h2 className="text-4xl text-center mb-10 text-titleText font-poppins">
        What is the Speciality Of Us?
      </h2>
      <div className="wrapper flex md:flex-row flex-col lg:flex-nowrap flex-wrap lg:gap-14 gap-8 justify-evenly py-10 px-5">
        <SpesialisCard title={"Quick Response"} image={satu} />
        <SpesialisCard title={"Great Communication"} image={dua} />
        <SpesialisCard title={"Customer Satisfaction"} image={tiga} />
      </div>
      <SliderButtons />
    </div>
  );
}
