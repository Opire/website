
import { Image } from "@mantine/core";
import styles from "./styles.module.css";
import NextImage from "next/image";
import PathArrowImage from '../../../../../../../../public/assets/illustrations/path-arrow.svg'
import clsx from "clsx";

export default function PathArrow({
    direction
}: {
    direction: "left" | "right";
}) {

    return (
        <Image
            component={NextImage}
            src={PathArrowImage}
            alt="path arrow"
            className={clsx(
                styles["icon"],
                styles[`icon--${direction}`]
            )}
        />
    );
}