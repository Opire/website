import styles from "./styles.module.css";
import { OPButton } from "@/app/(web)/_shared/_components/Button/OPButton";
import { CONFIG } from "@/app/(web)/_shared/config";

export function CommunityBanner() {

    return (
        <section id="community" className={styles.section}>
            <div className={styles.light}></div>
            <div className={styles.banner}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Join the <span className={styles["title--highlighted"]}>{"{community}"}</span> around the world
                    </h1>
                    <p className={styles.description}>
                        Join the Opire Discord community to connect with fellow developers, collaborate on open-source projects, and earn bounties for your contributions. It's a space where quality work is valued, and you can grow your skills while making a real impact!
                    </p>
                </div>

                <div className={styles["join-button"]}>
                    <OPButton
                        variant="secondary"
                        size="big"
                        href={CONFIG.DISCORD_LINK}
                        target="_blank"
                    >
                        Join Our Discord
                    </OPButton>
                </div>
            </div>
        </section>
    );
}
