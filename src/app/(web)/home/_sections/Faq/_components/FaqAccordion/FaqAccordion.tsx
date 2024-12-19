import {
    Accordion,
    AccordionControl,
    AccordionItem,
    AccordionPanel,
    Group,
} from "@mantine/core";
import styles from "./styles.module.css";
import { IconPlus } from "@tabler/icons-react";
import { Faq, FaqCategory, FaqGroupType } from "../../_data/FAQs";
import clsx from "clsx";

export function FaqAccordion({
    faqs,
    group,
}: {
    faqs: FaqCategory;
    group: FaqGroupType;
}) {

    function getAccordionItemForAllGroups() {
        const accordionItems = [];
        for (const [faqGroup, faqsFromGroup] of Object.entries(faqs)) {
            const items = faqsFromGroup.map((item, index) => (
                <AccordionItem key={item.id} value={item.question} className={clsx(
                    { [styles.firstFaq]: index === 0 },
                    { [styles.visible]: faqGroup === group }
                )}>
                    <AccordionControl>{item.question}</AccordionControl>
                    <AccordionPanel>
                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </AccordionPanel>
                </AccordionItem>
            ));

            accordionItems.push(...items);
        }

        return accordionItems;
    }

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
                {getAccordionItemForAllGroups()}
            </Accordion>
        </Group>
    );
}
