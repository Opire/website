import styles from "./styles.module.css";
import { Hero } from "./_sections/Hero/Hero";
import FeaturedBounties from "./_sections/FeaturedBounties/FeaturedBounties";
import WhoIsItFor from "./_sections/WhoIsItFor/WhoIsItFor";
import HowDoesItWork from "./_sections/HowDoesItWork/HowDoesItWork";
import Testimonials from "./_sections/Testimonials/Testimonials";
import Pricing from "./_sections/Pricing/Pricing";
import Faq from "./_sections/Faq/Faq";
import CommunityBanner from "./_sections/CommunityBanner/CommunityBanner";
import { LogoMask } from "./_sections/Hero/_components/LogoMask/LogoMask";
import { Header } from "../_shared/_components/Header/Header";
import { Footer } from "../_shared/_components/Footer/Footer";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <LogoMask />
      <main className={styles.main}>
        <Hero />
        <FeaturedBounties />
        <WhoIsItFor />
        <HowDoesItWork />
        <Testimonials />
        <Pricing />
        <Faq />
        <CommunityBanner />
      </main>
      <Footer />
    </div>
  );
}
