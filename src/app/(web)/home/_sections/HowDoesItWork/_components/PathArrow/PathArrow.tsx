
import { Image } from "@mantine/core";
import styles from "./styles.module.css";
import NextImage from "next/image";
import PathArrowImage1 from '../../../../../../../../public/assets/illustrations/path-arrow-1.svg'
import PathArrowImage2 from '../../../../../../../../public/assets/illustrations/path-arrow-2.svg'
import clsx from "clsx";

export default function PathArrow({
    direction,
    variant = 1,
}: {
    direction: "left" | "right";
    variant?: 1 | 2;
}) {

    return (
        <Image
            component={NextImage}
            src={variant === 1 ? PathArrowImage1 : PathArrowImage2}
            alt="path arrow"
            className={clsx(
                styles["icon"],
                styles[`icon-${variant}`],
                styles[`icon-${variant}--${direction}`],
            )}
        />
    );
}