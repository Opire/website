import { Image } from "@mantine/core";
import styles from "./styles.module.css";
import NextImage from "next/image";
import Link from "next/link";

export function Community() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Community</h2>

            <div className={styles["discord-container"]}>
                <Link href="https://discord.gg/Rfq8CMZH4b" target="_blank" className={styles["discord-link"]}>
                    <Image component={NextImage} src="https://invidget.switchblade.xyz/Rfq8CMZH4b" alt="Discord invite link" fill fit="contain" />
                </Link>
            </div>
        </section>
    );
}
