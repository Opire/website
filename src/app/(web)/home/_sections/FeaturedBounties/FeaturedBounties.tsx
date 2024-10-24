'use client';

import FeaturedBountyCard from "@/app/(web)/home/_sections/FeaturedBounties/_components/FeaturedBountyCard/FeaturedBountyCard";
import styles from "./styles.module.css";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import '@mantine/carousel/styles.css';
import { FEATURED_BOUNTIES } from "./_data/FEATURED_BOUNTIES_DATA";

export default function FeaturedBounties() {
  const autoplay = useRef(
    Autoplay({
      jump: false,
      delay: 4700,
      playOnInit: true,
    })
  );

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Featured bounties</h1>
      <Carousel
        slideSize="0%"
        align="center"
        slideGap="xl"
        withControls={false}
        dragFree
        loop
        speed={1.2}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {FEATURED_BOUNTIES.map((bounty) => (
          <CarouselSlide key={`${bounty.issueId}`}>
            <FeaturedBountyCard {...bounty} />
          </CarouselSlide>
        ))}
      </Carousel>
    </section>
  );
}
