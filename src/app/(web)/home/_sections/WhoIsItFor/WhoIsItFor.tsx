import { Group, Image } from "@mantine/core";
import WhoIsItForIllustration from "../../../../../../public/assets/illustrations/who-is-it-for.svg";
import NextImage from 'next/image';

import WhoIsItForMoneyIllustration from "../../../../../../public/assets/illustrations/who-is-it-for-money.svg";
import WhoIsItForBulbIllustration from "../../../../../../public/assets/illustrations/who-is-it-for-bulb.svg";
import WhoIsItForStarIllustration from "../../../../../../public/assets/illustrations/who-is-it-for-star.svg";

import styles from "./styles.module.css";
import { OpireTarget } from "./_components/OpireTarget/OpireTarget";

export function WhoIsItFor() {
  return (
    <section id="who-is-it-for" className={styles.section}>
      <Group className={styles.titleSection}>
        {/* <div className={styles.light}></div> */}
        <h1 className={styles.title}>
          Stop waiting for an issue to be solved, <span className={styles["title--highlighted"]}>{"{reward it}"}</span>
          <br />
          <span>It's easy.</span>
        </h1>
      </Group>

      <Group className={styles.content}>
        <Image
          component={NextImage}
          src={WhoIsItForIllustration}
          alt="people working together"
          className={styles.illustration}
        />

        <div className={styles.targets}>
          <OpireTarget
            title="Open Source Projects"
            description="We know that maintaining an open source project is not easy, so you can rely on the community to grow your project and reward their contributions."
            icon={WhoIsItForStarIllustration}
            iconAlt="star"
          />

          <OpireTarget
            title="Developers"
            description="Helping open source projects by solving issues and also being able to earn money from it! That's the dream of any developer."
            icon={WhoIsItForBulbIllustration}
            iconAlt="illuminated bulb"
          />

          <OpireTarget
            title="Anyone"
            description="Anyone can create bounties on open source project issues so go ahead and support the open source community to grow. We owe them a lot."
            icon={WhoIsItForMoneyIllustration}
            iconAlt="increase fund in open source projects"
          />
        </div>
      </Group>
    </section>
  );
}
