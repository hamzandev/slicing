import SponsorCard from "./SponsorCard";

import a from "../public/assets/a.svg";
import b from "../public/assets/b.svg";
import c from "../public/assets/c.svg";
import d from "../public/assets/d.svg";
import e from "../public/assets/e.svg";
import f from "../public/assets/f.svg";

export default function Sponsor() {
  return (
    <div id="products" className="sponsor-section mt-20 lg:p-0 px-3">
      <h3 className="text-4xl text-titleText mb-3 text-center font-poppins">
        Our Owning Products
      </h3>
      <p className="text-baseText lg:w-1/2 font-poppins text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab nisi
        corrupti, dolor aliquid blanditiis doloribus, voluptatem praesentium,
        debitis commodi quae dolorem.
      </p>
      <div className="container py-10 lg:px-20 px-3 md:px-5 flex lg:flex-row flex-col gap-5 mx-auto">
        <div className="left mt-10 flex flex-col gap-y-5">
          <SponsorCard image={a} />
          <SponsorCard image={b} />
        </div>
        <div className="mid flex flex-col gap-y-5">
          <SponsorCard image={c} />
          <SponsorCard image={d} />
        </div>
        <div className="mid mt-10 flex flex-col gap-y-5">
          <SponsorCard image={e} />
          <SponsorCard image={f} />
        </div>
      </div>
    </div>
  );
}
