import Image from "next/image";
import SliderButtons from "./SliderButtons";

import style from "../styles/Testimonies.module.css";

import profile from "../public/assets/profile.svg";
import quote1 from "../public/assets/quote1.svg";
import quote2 from "../public/assets/quote2.svg";

export default function Testimonies() {
  return (
    <div className="testimonies">
      <h3 className="lg:text-4xl text-3xl text-titleText font-poppins text-center mt-20">
        What Our Client Says?
      </h3>
      <div
        className={`container mx-auto flex-col mt-10 px-20 flex ${style.bgImage} lg:h-screen justify-center items-center`}
      >
        <div className="image lg:w-auto w-1/3">
          <Image src={profile} alt="profile" />
        </div>
        <div className="quote-simbols lg:flex hidden justify-between w-1/2">
          <Image src={quote2} alt="test" />
          <Image src={quote1} alt="test" />
        </div>
        <div className="client-info text-center lg:w-1/2">
          <p className="text-gray-600 font-poppins lg:mt-5 mt-2 lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nesciunt, laudantium veniam itaque nisi et sunt quae aspernatur?
          </p>
          <span className="text-gray-400 mt-8 lg:mb-3 block font-poppins">
            Hamzan Wahyudi
          </span>
          <span className="text-gray-400 font-poppins">
            Senior Frorntend Dev
          </span>
        </div>
        <div className="mt-10">
          <SliderButtons />
        </div>
      </div>
    </div>
  );
}
