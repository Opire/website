"use client";

import { Flex, Group, SegmentedControl } from "@mantine/core";
import classes from "./component.module.css";
import { useState } from "react";
import PricingCard from "./../../components/PricingCard/index";

export default function PricingSection() {
  const [value, setValue] = useState("Organizations");

  return (
    <section id="#pricing" className={classes.pricing}>
      <Group className={classes.pricingTitleSection}>
        <h1 className={classes.pricingTitle}>Pricing </h1>
        <SegmentedControl
          size="md"
          radius="xl"
          value={value}
          onChange={setValue}
          color="#1E9387"
          data={["Organizations", "Individuals"]}
          bg={"#FFFFFF1A"}
          p={"4px"}
        />
      </Group>
      <Group className={classes.pricingSubtitleSection}>
        <h2 className={classes.pricingSubtitle}>
          Developers receive 100% of bounties
        </h2>
        <svg
          style={{ marginLeft: "7.5rem", marginBottom: "0.5rem" }}
          width="85"
          height="14"
          viewBox="0 0 85 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M79.1485 2.10325C80.733 2.03374 81.8484 2.0571 82.4948 2.17334C83.2464 2.28037 83.7395 2.46186 83.9739 2.7178C84.3106 2.93025 84.4399 3.1954 84.3617 3.51326C84.2834 3.83112 84.2578 4.14438 84.2848 4.45304C81.705 5.26622 78.1106 5.99538 73.5014 6.64053C68.8892 7.25139 64.0621 7.82922 59.02 8.37402C53.9749 8.88453 49.0846 9.34692 44.3492 9.76122C39.6138 10.1755 35.8826 10.5538 33.1556 10.896C27.4911 11.599 23.0894 12.1914 19.9504 12.6734C16.9137 13.1118 14.8241 13.4674 13.6816 13.7402C11.6792 13.8808 10.0902 13.8989 8.91464 13.7944C7.7391 13.6899 6.77101 13.5327 6.01039 13.3228C5.24677 13.0786 4.58537 12.7909 4.02621 12.4596C3.46705 12.1284 2.80116 11.7893 2.02853 11.4422C2.42546 11.131 2.49618 10.7274 2.24071 10.2314C1.98524 9.73538 1.31935 9.39622 0.243034 9.21393C1.08188 9.10598 1.69677 8.86212 2.08769 8.48234C2.47561 8.06827 2.45161 7.79391 2.01568 7.65926C3.68738 7.37478 5.46881 7.13253 7.35998 6.93252C9.35337 6.689 11.2956 6.46724 13.1868 6.26723C15.078 6.06721 16.8624 5.85926 18.5401 5.64337C20.32 5.38397 21.8324 5.09615 23.0772 4.7799C28.3357 4.28528 33.7506 3.7597 39.3219 3.20316C44.9984 2.63742 50.3066 2.1039 55.2464 1.6026C57.0504 1.61756 59.164 1.53632 61.5873 1.35886C64.0076 1.14711 66.3799 0.991404 68.7039 0.891745C71.025 0.757791 73.1462 0.762282 75.0673 0.905219C76.9885 1.04816 78.3489 1.4475 79.1485 2.10325Z"
            fill="#E8DCD0"
          />
        </svg>
        <small className={classes.pricingSubtitleSmall}>
          Associated costs are charged on top of the reward amount, resulting in
          the final price to be paid.
        </small>
      </Group>
      {value === "Organizations" && (
        <Group className={classes.pricingContentSection}>
          <PricingCard
            name="Starter"
            price={24.98}
            anualPrice={19.99}
            saving={20}
            lightPlan={true}
            planFeatures={[
              { active: false, description: "Featured publication" },
              { active: false, description: "Team space" },
              { active: true, description: "3 active projects" },
              { active: true, description: "Stripe fee $0.85 + 5.25%" },
              { active: true, description: "Platform Fee 15%" },
              { active: true, description: "Standard support" },
            ]}
          />
          <PricingCard
            name="Pro"
            price={49.98}
            anualPrice={39.99}
            saving={20}
            lightPlan={false}
            planFeatures={[
              { active: true, description: "Featured publication" },
              { active: true, description: "Team space" },
              { active: true, description: "Unlimited active projects" },
              { active: true, description: "Stripe fee $0.85 + 5.25%" },
              { active: true, description: "Platform Fee 10%" },
              { active: true, description: "Premium support" },
            ]}
          />
          <PricingCard
            name="Enterprise"
            price={249.98}
            anualPrice={199.99}
            saving={20}
            lightPlan={true}
            planFeatures={[
              { active: true, description: "Featured publication" },
              { active: true, description: "Team space" },
              { active: true, description: "Unlimited active projects" },
              { active: true, description: "Stripe fee $0.85 + 5.25%" },
              { active: true, description: "Platform Fee 10%" },
              { active: true, description: "Premium support" },
            ]}
          />
        </Group>
      )}
      {value === "Individuals" && (
        <Group className={classes.pricingContentSection}>
          <PricingCard
            name="INDIVIDUALS"
            price={24.98}
            anualPrice={19.99}
            saving={20}
            lightPlan={true}
            planFeatures={[
              { active: false, description: "Featured publication" },
              { active: false, description: "Team space" },
              { active: true, description: "3 active projects" },
              { active: true, description: "Stripe fee $0.85 + 5.25%" },
              { active: true, description: "Platform Fee 15%" },
              { active: true, description: "Standard support" },
            ]}
          />
          <PricingCard
            name="INDIVIDUALS"
            price={49.98}
            anualPrice={39.99}
            saving={20}
            lightPlan={false}
            planFeatures={[
              { active: true, description: "Featured publication" },
              { active: true, description: "Team space" },
              { active: true, description: "Unlimited active projects" },
              { active: true, description: "Stripe fee $0.85 + 5.25%" },
              { active: true, description: "Platform Fee 10%" },
              { active: true, description: "Premium support" },
            ]}
          />
          <PricingCard
            name="INDIVIDUALS"
            price={249.98}
            anualPrice={199.99}
            saving={20}
            lightPlan={true}
            planFeatures={[
              { active: true, description: "Featured publication" },
              { active: true, description: "Team space" },
              { active: true, description: "Unlimited active projects" },
              { active: true, description: "Stripe fee $0.85 + 5.25%" },
              { active: true, description: "Platform Fee 10%" },
              { active: true, description: "Premium support" },
            ]}
          />
        </Group>
      )}

      <div className={classes.pricingEclipse}></div>
    </section>
  );
}
