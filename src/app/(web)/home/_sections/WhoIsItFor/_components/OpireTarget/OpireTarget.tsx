import { Image } from "@mantine/core";
import NextImage from 'next/image';

import styles from "./styles.module.css";
import { ReactNode } from "react";

export function OpireTarget({
    title,
    description,
    icon,
    iconAlt,
}: {
    title: string;
    description: string;
    icon: ReactNode;
    iconAlt: string;
}) {
    return (
        <div className={styles.target}>
            <Image component={NextImage} src={icon} alt={iconAlt} className={styles["target-icon"]} />
            <div className={styles["target-text"]}>
                <h2 className={styles["target-title"]}>{title}</h2>
                <p className={styles["target-description"]}>
                    {description}
                </p>
            </div>
        </div>
    );
}
