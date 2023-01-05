import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, titlePage }) {
  return (
    <div>
      <Head>
        <meta name="description" content="tailiwndcss slicing nextjs" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>{titlePage}</title>
      </Head>
      <Navbar />
      <main className="main-content pt-20">{children}</main>
      <Footer />
    </div>
  );
}
