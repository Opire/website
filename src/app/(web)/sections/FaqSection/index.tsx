"use client";

import {
  Accordion,
  CloseButton,
  Flex,
  FloatingIndicator,
  Group,
  Input,
  SegmentedControl,
  UnstyledButton,
} from "@mantine/core";
import classes from "./component.module.css";
import { useState } from "react";

// const data = ["General", "Payments", "Bounties", "Tips", "Pricing"];

export default function FaqSection() {
  const [searchValue, setSearchValue] = useState("");

  // const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  // const [controlsRefs, setControlsRefs] = useState<
  //   Record<string, HTMLButtonElement | null>
  // >({});
  // const [activeCategory, setActiveCategory] = useState(0);

  // const setControlRef = (index: number) => (node: HTMLButtonElement) => {
  //   controlsRefs[index] = node;
  //   setControlsRefs(controlsRefs);
  // };

  // const controls = data.map((item, index) => (
  //   <UnstyledButton
  //     key={item}
  //     className={classes.faqContentCategoryItem}
  //     ref={setControlRef(index)}
  //     onClick={() => setActiveCategory(index)}
  //     mod={{ active: activeCategory === index }}
  //   >
  //     <span className={classes.controlLabel}>{item}</span>
  //   </UnstyledButton>
  // ));

  const faqs = [
    {
      value: "0",
      question: "Can Opire be used in private projects?",
      answer:
        "Yes, our commands can be used within private projects, but there is a detail to consider. The created rewards will appear on the Opire platform, but developers without access to the project.",
    },
    {
      value: "1",
      question: "Who is Opire for?",
      answer:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
    },
    {
      value: "2",
      question: "In which countries can I use Opire?",
      answer:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
    },
    {
      value: "3",
      question: "If I receive income, how do I declare the benefits?",
      answer:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
    },
    {
      value: "4",
      question: "If I want to create bounties, do I have to configure Stripe?",
      answer:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
    },
    {
      value: "5",
      question:
        "As a developer, what happens if I don't have my Stripe account configured when claiming the reward?",
      answer:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
    },
  ];

  const items = faqs.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.question}</Accordion.Control>
      <Accordion.Panel>{item.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <section id="#faq" className={classes.faq}>
      <Group className={classes.faqTitleSection}>
        <h1 className={classes.faqTitle}>Frequently Asked Questions</h1>
        <Input
          size="md"
          radius="md"
          placeholder="Write your question here..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.currentTarget.value)}
          classNames={{
            input: classes.faqSearchbar,
          }}
          rightSection={
            <CloseButton
              aria-label="Clear input"
              onClick={() => setSearchValue("")}
              style={{ display: searchValue ? undefined : "none" }}
            />
          }
        />
      </Group>
      <Group className={classes.faqContentSection}>
        {/* <Flex className={classes.faqContentCategoryRoot} ref={setRootRef}>
          {controls}

          <FloatingIndicator
            target={controlsRefs[activeCategory]}
            parent={rootRef}
            className={classes.faqContentCategoryIndicator}
          />
        </Flex> */}

        <Accordion
          variant="separated"
          transitionDuration={500}
          defaultValue="0"
          w={"50%"}
          miw={"50%"}
          maw={"50%"}
          chevron={
            <svg
              className={classes.icon}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 7H9V0H7V7H0V9H7V16H9V9H16V7Z"
                fill="#92BEBA"
              />
            </svg>
          }
          classNames={{
            root: classes.faqAccordionRoot,
            item: classes.faqAccordionItem,
            itemTitle: classes.faqAccordionTitle,
            control: classes.faqAccordionControl,
            chevron: classes.chevron,
          }}
        >
          {items}
        </Accordion>
      </Group>
    </section>
  );
}
