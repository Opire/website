'use client';

import { FeaturedBountyCard } from "@/app/(web)/home/_sections/FeaturedBounties/_components/FeaturedBountyCard/FeaturedBountyCard";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import '@mantine/carousel/styles.css';
import { FeaturedIssue } from "../../_types/FeaturedIssue";

export function FeaturedBountyCarousel({
  featuredIssues,
}: {
  featuredIssues: FeaturedIssue[];
}) {
  const autoplay = useRef(
    Autoplay({
      jump: false,
      delay: 4700,
      playOnInit: true,
    })
  );

  return (
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
      {featuredIssues.map((bounty) => (
        <CarouselSlide key={`${bounty.id}`}>
          <FeaturedBountyCard {...bounty} />
        </CarouselSlide>
      ))}
    </Carousel>
  );
}
