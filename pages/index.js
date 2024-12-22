import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Map from "../components/misc";
import ManagerOfTheMonth from "../components/ManagerOfTheMonth";

export default function Home() {
  return (
    <>
      <SeoHead title="LaslesVPN Landing Page" />
      <Layout>
        <ManagerOfTheMonth />
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
