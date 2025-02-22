import clsx from "clsx";
import styles from "./styles.module.css";
import { OPButton } from "@/app/(web)/_shared/_components/Button/OPButton";
import { Container } from "@/app/(web)/_shared/_components/Container/Container";
import { WatchVideoButton } from "./_components/WatchVideoButton/WatchVideoButton";
import { CONFIG } from "@/app/(web)/_shared/config";

export function Hero() {
    return (
        <Container>
            <section className={styles.section}>
                <div className={styles.content}>
                    <h1 className={styles.title}><span className={clsx(styles.title_not_highlight, styles.title_not_highlight_1)}>Fund</span> <br /><span className={styles.title_highlight}>Open Source</span> <br /><span className={clsx(styles.title_not_highlight, styles.title_not_highlight_2)}>issues</span></h1>

                    <p className={styles.subtitle}>Anyone can create bounties in open-source projects and attract contributors, while developers can earn money by solving issues</p>

                    <div className={styles.ctas}>
                        <OPButton size="big" href={CONFIG.OPIRE_APP_URL} target="_blank">GET STARTED NOW</OPButton>
                        <WatchVideoButton />
                    </div>
                </div>
            </section>
        </Container>
    );
}
