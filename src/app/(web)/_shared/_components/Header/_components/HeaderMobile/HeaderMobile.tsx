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
import { HEADER_MENU } from "../_data/HEADER_MENU";

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
                    {HEADER_MENU.map((item) => (
                        <Link
                            key={item.text}
                            className={styles.link}
                            href={item.href}
                            target={item.target}
                            onClick={closeMenu}
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
