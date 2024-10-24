import LogoMaskSVG from "../../../../../../../../public/assets/opire/logo_mask.svg";
import { Image } from "@mantine/core";
import NextImage from 'next/image';
import styles from "./styles.module.css";

export function LogoMask() {
    return (
        <div className={styles["logo-wrapper"]}>
            <div className={styles["logo-container"]}>
                <Image className={styles.logo} component={NextImage} alt="opire logo mask" src={LogoMaskSVG} />
            </div>
        </div>
    );
}
