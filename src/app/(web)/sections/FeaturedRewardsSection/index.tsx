"use client";

import { Group } from "@mantine/core";
import classes from "./component.module.css";
import FeaturedRewardCard from "../../components/FeaturedRewardCard";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";

export default function FeaturedRewardsSection() {
  const [featuresRewards, setFeaturesRewards] = useState([
    {
      price: 1000,
      programmingLang: "JAVASCRIPT",
      availableCommands: false,
      description: undefined,
      logo: undefined,
    },
    {
      price: 850,
      programmingLang: "TYPESCRIPT",
      availableCommands: false,
      description: undefined,
      logo: undefined,
    },
    {
      price: 1300,
      programmingLang: "TYPESCRIPT",
      availableCommands: false,
      description: undefined,
      logo: undefined,
    },
    {
      price: 500,
      programmingLang: "TYPESCRIPT",
      availableCommands: false,
      description: undefined,
      logo: undefined,
    },
    {
      price: 250,
      programmingLang: "JAVASCRIPT",
      availableCommands: true,
      description: undefined,
      logo: undefined,
    },
    {
      price: 650,
      programmingLang: "JAVA",
      availableCommands: true,
      description: undefined,
      logo: undefined,
    },
  ]);
  const autoplay = useRef(
    Autoplay({
      jump: false,
      delay: 1500,
      playOnInit: true,
    })
  );

  return (
    <section className={classes.featuredRewards}>
      <h1 className={classes.featuredRewardsTitle}>Featured rewards</h1>
      <Carousel
        slideSize="21%"
        align="start"
        slideGap="md"
        withControls={false}
        loop
        slidesToScroll={2}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {featuresRewards.map((reward, i) => {
          return (
            <Carousel.Slide key={`${reward.description}-${i}`}>
              <FeaturedRewardCard
                price={reward.price}
                description={reward.description}
                programmingLang={reward.programmingLang}
                availableCommands={reward.availableCommands}
                logo={reward.logo}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </section>
  );
}
