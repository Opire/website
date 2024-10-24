import { Group, Image } from "@mantine/core";
import WhoIsItForIllustration from "../../../../../../public/assets/illustrations/who-is-it-for.svg";
import NextImage from 'next/image';

import styles from "./styles.module.css";
import OpireBenefits from "./_components/OpireBenefits/OpireBenefits";

export default function WhoIsItFor() {
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
        <Image component={NextImage} src={WhoIsItForIllustration} alt="people working together" className={styles.illustration} />
        <div className={styles.benfits}>
          <OpireBenefits />
        </div>
      </Group>
    </section>
  );
}
