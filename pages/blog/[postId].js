import Image from "next/image";
import Layout from "../../components/Layout";
import OtherPostCard from "../../components/OtherPostCard";

import one from "../../public/img/6.jpg";
import two from "../../public/img/1.jpg";
import three from "../../public/img/2.jpg";
import four from "../../public/img/3.jpg";

export default function PostDetail() {
  return (
    <Layout>
      <div className="detail-post container mx-auto lg:px-20 px-5">
        <div className="md:flex grid gap-10 my-20 font-poppins">
          <div className="content flex flex-col gap-3" style={{ flex: 5 }}>
            <h1 className="md:text-4xl text-3xl text-titleText">
              Things remember when moving website from a Shopify to WordPress
              CMS
            </h1>
            <span className="text-gray-500">
              By Hamzan Wahyudi. Nov 17, 2022.
            </span>
            <div className="image bg-gray-200 rounded-md overflow-hidden">
              <Image src={one} alt="image" className="object-cover w-full" />
            </div>
            <div className="body-text mt-3 grid gap-10">
              <p className="text-gray-500 leading-relaxed text-lg text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                excepturi quo dolorum maiores maxime sed doloribus numquam
                incidunt recusandae quos saepe molestiae quidem sint
                necessitatibus voluptas quod illo, doloremque iure nulla.
                Voluptate, doloribus tempora!
              </p>
              <p className="text-gray-500 leading-relaxed text-lg text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                porro consequuntur officia optio magnam facere impedit
                architecto dicta repellat. Tempora illo, perspiciatis, aliquam
                in et eum minima consequatur nesciunt iste unde impedit neque
                temporibus, rerum aperiam doloribus porro expedita dignissimos?
                Vel doloribus tenetur animi consequuntur.
              </p>
              <p className="text-gray-500 leading-relaxed text-lg text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis id ab possimus iure in labore cumque eius dicta
                temporibus cum. Fugiat optio nobis aliquam?
              </p>
              <p className="text-gray-500 leading-relaxed text-lg text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis fuga consequuntur et porro. Vero vitae, neque repellat
                modi nulla quo maxime dicta maiores labore, soluta earum, sit
                necessitatibus iste explicabo ad laboriosam dolores recusandae
                quidem natus nemo ab. Exercitationem expedita, vel odit ullam
                esse alias amet culpa possimus natus. Excepturi repudiandae
                doloremque ea maxime aliquid nostrum, autem nisi, nihil quisquam
                modi voluptatum ipsa perspiciatis nulla, neque explicabo!
              </p>
              <p className="text-gray-500 leading-relaxed text-lg text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                excepturi quo dolorum maiores maxime sed doloribus numquam
                incidunt recusandae quos saepe molestiae quidem sint
                necessitatibus voluptas quod illo, doloremque iure nulla.
                Voluptate, doloribus tempora!
              </p>
            </div>
          </div>
          <div className="other-post" style={{ flex: 2 }}>
            <h4 className="text-xl my-10 text-titleText font-poppins">
              Other Posts
            </h4>
            <div className="grid gap-5">
              <OtherPostCard
                title={"Tutorial ReactJS Firebase untuk pemula."}
                author="Fikro Najiah"
                image={two}
              />
              <OtherPostCard
                title={"Tutorial ReactJS Firebase untuk pemula."}
                author="Fikro Najiah"
                image={three}
              />
              <OtherPostCard
                title={"Tutorial ReactJS Firebase untuk pemula."}
                author="Fikro Najiah"
                image={four}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
