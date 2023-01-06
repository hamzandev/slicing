import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import style from "../../styles/Blog.module.css";

import one from "../../public/img/1.jpg";
import two from "../../public/img/2.jpg";
import three from "../../public/img/3.jpg";
import four from "../../public/img/4.jpg";
import five from "../../public/img/5.jpg";
import PostCard from "../../components/PostCard";

export default function Blog() {
  const router = useRouter();

  return (
    <Layout titlePage={"Blog Posts"}>
      <div className={`blog ${style.bgImage} pt-20 min-h-[50vh]`}>
        <h3 className="text-4xl font-poppins text-center">Blog</h3>
        <h4 className="text-xl text-center mt-2">{`Home${router.asPath}`}</h4>
        <div className="container mx-auto px-16 my-10 py-10">
          <div className="grid z-10 gap-8 lg:grid-cols-3 grid-cols-1">
            <PostCard
              image={one}
              title="Samsung releases SDK smartphone Application"
              author={"Hamzan Wahyudi"}
            />
            <PostCard
              image={two}
              title="Samsung releases SDK smartphone Application"
              author={"Hamzan Wahyudi"}
            />
            <PostCard
              image={three}
              title="Samsung releases SDK smartphone Application"
              author={"Hamzan Wahyudi"}
            />
            <PostCard
              image={four}
              title="Samsung releases SDK smartphone Application"
              author={"Hamzan Wahyudi"}
            />
            <PostCard
              image={five}
              title="Samsung releases SDK smartphone Application"
              author={"Hamzan Wahyudi"}
            />
            <PostCard
              image={two}
              title="Samsung releases SDK smartphone Application"
              author={"Hamzan Wahyudi"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
