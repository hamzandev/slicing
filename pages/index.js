import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Spesialis from "../components/Spesialis";
import Sponsor from "../components/Sponsor";
import Testimonies from "../components/Testimonies";
import FormSection from "../components/FormSection";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Feature />
      <Spesialis />
      <Sponsor />
      <Testimonies />
      <FormSection />
    </Layout>
  );
}
