import FeatureComp from "./FeatureComp";

import feature1 from "../public/assets/feature1.svg";
import feature2 from "../public/assets/feature2.svg";

export default function Feature() {
  return (
    <div
      id="features"
      className="features container mx-auto mt-28 px-10 flex flex-col gap-5"
    >
      <FeatureComp
        title={"The Process About Our Work"}
        image={feature1}
        reverse={false}
      />
      <FeatureComp
        title={"The Process About Our Work"}
        image={feature2}
        direction={true}
      />
    </div>
  );
}
