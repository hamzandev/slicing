import Image from "next/image";

export default function SpesialisCard({ title, image }) {
  return (
    <div className="card items-center lg:w-4/12 md:w-2/5 w-full px-6 py-4 rounded-2xl shadow hover:shadow-xl duration-150 hover:cursor-pointer flex flex-col gap-3">
      <div className="image overflow-hidden">
        <Image src={image} alt="satu" className="object-cover" />
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h4 className="text-2xl font-poppins text-titleText">{title}</h4>
        <p className="text-baseText mb-2">
          Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec
          concludaturque ndo. Verear
        </p>
      </div>
    </div>
  );
}
