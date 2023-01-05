import Image from "next/image";
import kanan from "../public/assets/arrowRight.svg";
import kiri from "../public/assets/arrowLeft.svg";

export default function SliderButtons() {
  return (
    <div className="slider-buttons mb-8 flex justify-center gap-5">
      <button className="w-14 h-14 rounded-full flex justify-center items-center shadow-xl bg-gray-50">
        <Image src={kiri} alt="kiri" />
      </button>
      <button className="w-14 h-14 rounded-full flex justify-center items-center shadow-xl bg-gray-50">
        <Image src={kanan} alt="kanan" />
      </button>
    </div>
  );
}
