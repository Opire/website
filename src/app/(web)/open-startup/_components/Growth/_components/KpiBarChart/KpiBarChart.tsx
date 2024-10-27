import { IconInfoCircle } from "@tabler/icons-react";
import styles from "./styles.module.css";
import { Tooltip } from "@mantine/core";
import { BarChart, BarChartSeries } from '@mantine/charts';

export function KpiBarChart({
    title,
    tooltip,
    data,
    xField,
    config
}: {
    title: string;
    tooltip: string;
    data: Record<string, any>[],
    xField: string,
    config: BarChartSeries[]
}) {
    return (
        <>
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
                    <BarChart
                        h={"500"}
                        data={data}
                        dataKey={xField}
                        series={config}
                        tickLine="xy"
                        gridAxis="xy"
                    />
                </div>
            </article>
        </>
    );
}
