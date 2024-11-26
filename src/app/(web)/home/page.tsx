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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opire - the bounty platform for software developers",
  description:
    "With Opire, anyone can create bounties for open-source projects and grow their community, while developers can solve issues and earn the associated rewards.",
  keywords: [
    "bounty",
    "bounties",
    "bounty platform",
    "bounty hunter",
    "bounty hunting",
    "opire",
    "opiredev",
    "open source",
    "community",
    "OOS",
    "reward",
    "reward platform",
    "open startup",
    "OSS",
    "open-source",
    "open source bounties",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@opire_dev",
    creator: "@opire_dev",
    title: "Opire - the bounty platform for software developers",
    description:
      "With Opire, anyone can create bounties for open-source projects and grow their community, while developers can solve issues and earn the associated rewards.",
    images: {
      url: "https://opire.dev/assets/images/opire/web/landing.png",
      alt: "Opire Website",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opire.dev",
    siteName: "Opire",
    title: "Opire - the bounty platform for software developers",
    description:
      "With Opire, anyone can create bounties for open-source projects and grow their community, while developers can solve issues and earn the associated rewards.",
    images: [
      {
        url: "https://opire.dev/assets/images/opire/web/landing.png",
        width: 1901,
        height: 924,
        alt: "Opire Website",
      }
    ],
  }
};

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
