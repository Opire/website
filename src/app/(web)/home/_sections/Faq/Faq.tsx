"use client";

import {
  Group,
} from "@mantine/core";
import styles from "./styles.module.css";
import FaqAccordion from "./_components/FaqAccordion/FaqAccordion";
import { FaqGroup, FAQs } from "./_data/FAQs";
import { useState } from "react";
import FaqGroups from "./_components/FaqGroups/FaqGroups";

export default function Faq() {
  const [group, setGroup] = useState<FaqGroup>("General");

  return (
    <section id="faq" className={styles.section}>
      <Group className={styles["title-container"]}>
        <h1 className={styles.title}>
          Frequently Asked Questions
        </h1>
      </Group>
      <div className={styles.content}>
        <FaqGroups activeGroup={group} onClickGroup={setGroup} />
        <FaqAccordion faqs={FAQs[group]} />
      </div>
    </section>
  );
}
