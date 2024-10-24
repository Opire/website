import { Image } from "@mantine/core";

import styles from "./styles.module.css";
import Link from "next/link";
import { IconWorld } from "@tabler/icons-react";
import NextImage from 'next/image';
import BigLogo from "../../../../../../../../public/assets/big_logo.svg";
import { OPButton } from "../../../Button/OPButton";

export function HeaderDesktop() {

    return (
        <>
            <div className={styles.logo_container}>
                <Link href="/home#">
                    <Image component={NextImage} src={BigLogo} alt="logo" className={styles["logo"]} fit="contain" fill />
                </Link>
            </div>

            <nav className={styles.menu}>
                <Link className={styles.link} href="/home#who-is-it-for">
                    WHO IS IT FOR?
                </Link>
                <Link className={styles.link} href="/home#how-does-it-work">
                    HOW DOES IT WORK?
                </Link>
                <Link className={styles.link} href="/home#pricing">
                    PRICING
                </Link>
                <Link className={styles.link} href="/home#faq">
                    FAQS
                </Link>
                {/* <Link className={styles.link} href="/blog">
                    BLOG
                </Link> */}
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
