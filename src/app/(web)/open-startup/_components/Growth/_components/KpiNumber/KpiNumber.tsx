import { IconInfoCircle } from "@tabler/icons-react";
import styles from "./styles.module.css";
import { Tooltip } from "@mantine/core";

export function KpiNumber({
    title,
    tooltip,
    value,
}: {
    title: string;
    tooltip: string;
    value: number
}) {
    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <div>
                    <Tooltip
                        label={tooltip}
                        withArrow
                        arrowSize={8}
                        multiline
                        w={280}
                        className={styles.tooltip}
                        color="var(--color-gray-7)"
                        events={{ hover: true, focus: false, touch: true }}
                    >
                        <IconInfoCircle size={32} stroke={1} aria-label="more info about the kpi" />
                    </Tooltip>
                </div>
            </div>
            <div className={styles.value}>
                {value}
            </div>
        </article>
    );
}
