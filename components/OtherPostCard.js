import Image from "next/image";
import Link from "next/link";

export default function OtherPostCard({ image, title, author }) {
  return (
    <div className="post-card shadow-lg rounded-lg font-poppins">
      <div className="image w-full h-auto">
        <Image src={image} alt="one" className="object-cover" />
      </div>
      <div className="detail px-6 py-4">
        <h2 className="text-xl text-titleText">{title}</h2>
        <small className="text-gray-400 my-3 block">
          By {` ${author} `} Nov 17, 2022
        </small>
        <Link
          href="/blog/123"
          className="text-secondary my-3 block px-4 py-2 rounded-md hover:bg-secondary hover:text-gray-100 duration-100 border border-secondary w-max"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
