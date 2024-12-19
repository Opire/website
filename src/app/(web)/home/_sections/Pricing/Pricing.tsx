"use client";

import { Center, Group, Image, SegmentedControl } from "@mantine/core";
import styles from "./styles.module.css";
import { useState } from "react";
import NextImage from "next/image";
import Underline from "../../../../../../public/assets/illustrations/underline.svg"
import clsx from "clsx";
import { INDIVIDUAL_PRICING_PLANS, ORGANIZATION_PRICING_PLANS } from "./_data/PRICING_PLANS";
import { PricingCard } from "./_components/PricingCard/PricingCard";

export function Pricing() {
  const [value, setValue] = useState("Organizations");
  const [isShowingAnnual, setIsShowingAnnual] = useState(true);

  return (
    <section id="pricing" className={styles.section}>
      <h1 className={styles.title}>Pricing</h1>

      <Group className={styles["banner-container"]}>
        <h2 className={styles["banner-title"]}>
          Free to use
        </h2>

        <small className={styles["banner-tagline"]}>
          Opire is free to use. The bounty creator only pay a <strong>4% Opire fees</strong> + Stripe fees when a bounty is paid out.
          <br />
          <br />
          For those seeking more, we offer subscription plans for organizations and individuals to unlock additional features.
          <br />
          You can purchase your preferred plan in your Opire settings.
        </small>
      </Group>

      <Group className={clsx(styles["banner-container"])}>
        <h2 className={styles["banner-title"]}>
          Developers receive <span className={styles["banner-title-undeline"]}>100%
            <Image component={NextImage} src={Underline} alt="underline" className={styles.underline} />
          </span> of bounties
        </h2>

        <small className={styles["banner-tagline"]}>
          {/* Associated costs are charged on top of the bounty amount, resulting in the final price to be paid. */}
          Developers receive 100% of the bounty they earn, with no deductions or hidden fees taken from their payout.
          <br />
          <br />
          All associated fees are covered by the bounty creator.
        </small>
      </Group>

      <Center style={{ paddingBottom: '5rem' }}>
        <SegmentedControl
          size="md"
          radius="xl"
          value={value}
          onChange={setValue}
          color="var(--color-primary)"
          data={["Organizations", "Individuals"]}
          bg={"var(--color-white-opacity-0102)"}
          p={"4px"}
        />
      </Center>

      {value === "Organizations" && (
        <div className={clsx(styles["pricing-cards"], styles["pricing-cards--3cols"])}>
          {ORGANIZATION_PRICING_PLANS.map((plan) => (
            <PricingCard key={`organization-${plan.name}`} {...plan} isAnnual={isShowingAnnual} onToggleAnnual={(value) => setIsShowingAnnual(value)} />
          ))}
        </div>
      )}

      {value === "Individuals" && (
        <Group className={clsx(styles["pricing-cards"], styles["pricing-cards--2cols"])}>
          {INDIVIDUAL_PRICING_PLANS.map((plan) => (
            <PricingCard key={`individual-${plan.name}`} {...plan} isAnnual={isShowingAnnual} onToggleAnnual={(value) => setIsShowingAnnual(value)} />
          ))}
        </Group>
      )}

      {/* <div className={styles.light}></div> */}
    </section>
  );
}
