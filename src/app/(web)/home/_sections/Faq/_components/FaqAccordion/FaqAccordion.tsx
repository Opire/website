import {
    Accordion,
    AccordionControl,
    AccordionItem,
    AccordionPanel,
    Group,
} from "@mantine/core";
import styles from "./styles.module.css";
import { IconPlus } from "@tabler/icons-react";
import { Faq } from "../../_data/FAQs";

export default function FaqAccordion({
    faqs,
}: {
    faqs: Faq[];
}) {
    const items = faqs.map((item) => (
        <AccordionItem key={item.id} value={item.question}>
            <AccordionControl>{item.question}</AccordionControl>
            <AccordionPanel>
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </AccordionPanel>
        </AccordionItem>
    ));

    return (
        <Group className={styles["faq-content"]}>
            <Accordion
                variant="separated"
                transitionDuration={500}
                chevron={<IconPlus className={styles["accordion-icon"]} />}
                classNames={{
                    root: styles["faq-container"],
                    item: styles["faq-item"],
                    itemTitle: styles["faq-title"],
                    control: styles["faq-control"],
                    panel: styles["faq-panel"],
                    chevron: styles["accordion-icon--close"],
                }}
            >
                {items}
            </Accordion>
        </Group>
    );
}
