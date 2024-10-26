import { Image } from "@mantine/core";

import styles from "./styles.module.css";
import Link from "next/link";
import NextImage from 'next/image';
import BigLogo from "../../../../../../../../public/assets/big_logo.svg";
import { OPButton } from "../../../Button/OPButton";
import { HEADER_MENU } from "../_data/HEADER_MENU";

export function HeaderDesktop() {

    return (
        <>
            <div className={styles.logo_container}>
                <Link href="/home#">
                    <Image component={NextImage} src={BigLogo} alt="logo" className={styles["logo"]} fit="contain" fill />
                </Link>
            </div>

            <nav className={styles.menu}>
                {HEADER_MENU.map((item) => (
                    <Link
                        key={item.text}
                        className={styles.link}
                        href={item.href}
                        target={item.target}
                    >
                        {item.text}
                    </Link>
                ))}
            </nav>

            <div className={styles.ctas}>
                {/* <OPButton
                    variant="secondary"
                    leftSection={<IconWorld size={26} />}
                >
                    ENG
                </OPButton> */}
                <OPButton
                    href="https://app.opire.dev"
                    target="_blank"
                >
                    SEE REWARDS
                </OPButton>
            </div>
        </>
    );
}
