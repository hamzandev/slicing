import Image from "next/image";
import Link from "next/link";

export default function SponsorCard({ image }) {
  return (
    <div className="card px-10 py-6 grid gap-5 rounded-xl shadow hover:shadow-xl duration-100">
      <div className="image">
        <Image src={image} alt="a" />
      </div>
      <p className="text-baseText font-poppins">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        voluptas iste.
      </p>
      <Link href={"/test"} className="text-secondary font-poppins">
        Learn More
      </Link>
    </div>
  );
}
