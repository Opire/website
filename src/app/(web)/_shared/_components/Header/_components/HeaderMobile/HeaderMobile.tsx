'use client';

import { Image } from "@mantine/core";

import styles from "./styles.module.css";
import Link from "next/link";
import { IconMenu2, IconWorld, IconX } from "@tabler/icons-react";
import NextImage from 'next/image';
import SmallLogo from "../../../../../../../../public/assets/small_logo.svg";
import { useState } from "react";
import clsx from "clsx";
import { OPButton } from "../../../Button/OPButton";

export function HeaderMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <>
            <div className={styles.logo_container}>
                <Link href="#">
                    <Image component={NextImage} src={SmallLogo} alt="logo" className={styles["logo"]} fit="contain" fill />
                </Link>
            </div>

            <div className={clsx(
                styles.drawer,
                { [styles["drawer-open"]]: isMenuOpen }
            )}>
                <nav className={clsx(
                    styles.menu,
                )}>
                    <Link className={styles.link} href="/home#who-is-it-for" onClick={closeMenu}>
                        WHO IS IT FOR?
                    </Link>
                    <Link className={styles.link} href="/home#how-does-it-work" onClick={closeMenu}>
                        HOW DOES IT WORK?
                    </Link>
                    <Link className={styles.link} href="/home#pricing" onClick={closeMenu}>
                        PRICING
                    </Link>
                    <Link className={styles.link} href="/home#faq" onClick={closeMenu}>
                        FAQS
                    </Link>
                    <Link className={styles.link} href="https://dev.to/opire" target="_blank" onClick={closeMenu}>
                        BLOG
                    </Link>
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
            </div>

            <div
                className={styles["hamburguer-menu"]}
                onClick={toggleMenu}
            >
                {isMenuOpen ? <IconX size={32} /> : <IconMenu2 size={32} />}
            </div>
        </>
    );
}
