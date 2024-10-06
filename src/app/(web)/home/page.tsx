import { HomeHeader } from "./../components/HomeHeader/index";
import HomeSection from "../sections/HomeSection/index";
import classes from "./page.module.css";
import FeaturedRewardsSection from "../sections/FeaturedRewardsSection";
import WhoIsItForSection from "../sections/WhoIsItForSection";
import { Group } from "@mantine/core";
import HowDoesItWorkSection from "../sections/HowDoesItWorkSection/index";
import FeedbackSection from "./../sections/FeedbackSection/index";
import PricingSection from "./../sections/PricingSection/index";
import FaqSection from "./../sections/FaqSection/index";
export default function Home() {
  return (
    <main className={classes.mainPage}>
      <section className={classes.mainSection}>
        <HomeHeader />
        <HomeSection />
        <FeaturedRewardsSection />
        <WhoIsItForSection />
        <HowDoesItWorkSection />
        <FeedbackSection />
        <PricingSection />
        <FaqSection />
      </section>
    </main>
  );
}
