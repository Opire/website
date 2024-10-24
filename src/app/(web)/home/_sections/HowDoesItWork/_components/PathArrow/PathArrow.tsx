'use client';

import { Image } from "@mantine/core";
import styles from "./styles.module.css";
import NextImage from "next/image";
import PathArrowImage from '../../../../../../../../public/assets/illustrations/path-arrow.svg'
import { useEffect, useRef } from "react";

export default function PathArrow() {

    return (
        <Image component={NextImage} src={PathArrowImage} alt="path arrow" className={styles["path-arrow-icon"]} />
    );
}
