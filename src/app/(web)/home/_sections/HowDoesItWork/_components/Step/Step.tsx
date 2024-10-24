import { Image } from "@mantine/core";
import styles from "./styles.module.css";
import NextImage from "next/image";
import clsx from "clsx";
import { ReactNode } from "react";

export default function Step({
    title,
    description,
    stepNumber,
    icon,
    position,
}: {
    title: string;
    description: string;
    stepNumber: number;
    icon: ReactNode;
    position: "left" | "right";
}) {
    return (
        <div className={clsx(styles.step, styles[`step--${position}`])}>
            <Image component={NextImage} src={icon} alt={`step ${stepNumber}`} className={styles["step-icon"]} />

            <h2 className={styles["step-title"]}>{title}</h2>
            <p className={styles["step-description"]}>
                {description}
            </p>
        </div>
    );
}
