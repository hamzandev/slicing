import Image from "next/image";
import Button from "./Button";

export default function FeatureComp({ title, image, reverse }) {
  return (
    <>
      <div
        className={`first-feature items-center flex lg:flex-row flex-col-reverse gap-20 mb-20 ${
          reverse === true ? "flex-row-reverse" : ""
        }`}
      >
        <div className="text-section lg:w-1/2 flex flex-col gap-5">
          <h2 className="text-4xl lg:w-1/2 font-poppins text-titleText">
            {title}
          </h2>
          <p className="font-poppins text-baseText">
            Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec
            elaboraret interpretaris, sed diceret concludaturque ndo. Verear
            habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed
          </p>
          <p className="font-poppins text-baseText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nemo
            dicta voluptatibus velit ut, aperiam dolore fugit eos sint, magni ad
            dolorem ea similique?
          </p>
          {reverse === false && <Button to={"/about"}>Know More</Button>}
        </div>
        <div className="image">
          <Image src={image} alt="feature 1 image" />
        </div>
      </div>
    </>
  );
}
