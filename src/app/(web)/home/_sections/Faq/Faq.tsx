"use client";

import {
  Group,
} from "@mantine/core";
import styles from "./styles.module.css";
import { FaqAccordion } from "./_components/FaqAccordion/FaqAccordion";
import { FaqGroupType, FAQs } from "./_data/FAQs";
import { useState } from "react";
import { FaqGroup } from "./_components/FaqGroups/FaqGroups";

export function Faq() {
  const [group, setGroup] = useState<FaqGroupType>("General");

  return (
    <section id="faq" className={styles.section}>
      <Group className={styles["title-container"]}>
        <h1 className={styles.title}>
          Frequently Asked Questions
        </h1>
      </Group>
      <div className={styles.content}>
        <FaqGroup
          activeGroup={group}
          onClickGroup={setGroup}
          faqs={<FaqAccordion faqs={FAQs} group={group} />}
        />
      </div>
    </section>
  );
}
