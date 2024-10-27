import { Tooltip } from "@mantine/core";
import styles from "./styles.module.css";
import { IconInfoCircle } from "@tabler/icons-react";

interface Price {
    value: number;
    unit: 'USD' | 'USD_CENT';
}

export function KpiPrice({
    title,
    tooltip,
    price,
}: {
    title: string;
    tooltip: string;
    price: Price
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
                {formatPrice(price)}
            </div>
        </article>
    );
}


function formatPrice(price: Price): string {
    if (price.unit === 'USD_CENT') {
        return formatPriceFromCents(price.value);
    }

    return formatPriceFromUsd(price.value);

    function formatPriceFromUsd(usd: number): string {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(usd);
    }

    function formatPriceFromCents(price: number): string {
        const usd = price / 100;

        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(usd);
    }
}
