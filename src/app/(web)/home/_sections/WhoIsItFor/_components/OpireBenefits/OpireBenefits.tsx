import { Image } from "@mantine/core";
import WhoIsItForBenefit1Illustration from "../../../../../../../../public/assets/illustrations/who-is-it-for-benfit-1.svg";
import WhoIsItForBenefit2Illustration from "../../../../../../../../public/assets/illustrations/who-is-it-for-benfit-2.svg";
import WhoIsItForBenefit3Illustration from "../../../../../../../../public/assets/illustrations/who-is-it-for-benfit-3.svg";
import NextImage from 'next/image';

import styles from "./styles.module.css";

export default function OpireBenefits() {
    return (
        <div className={styles.benefits}>
            <div className={styles.benefit}>
                <Image component={NextImage} src={WhoIsItForBenefit1Illustration} alt="increase fund in open source projects" className={styles["benefit-icon"]} />
                <div className={styles["benefit-text"]}>
                    <h2 className={styles["benefit-title"]}>Supporting project growth</h2>
                    <p className={styles["benefit-description"]}>
                        Bounties encourage developers to explore new ideas and
                        technologies, fostering innovation within the project and
                        pushing it forward.
                    </p>
                </div>
            </div>
            <div className={styles.benefit}>
                <Image component={NextImage} src={WhoIsItForBenefit2Illustration} alt="illuminated bulb" className={styles["benefit-icon"]} />
                <div className={styles["benefit-text"]}>
                    <h2 className={styles["benefit-title"]}>Investing in innovation</h2>
                    <p className={styles["benefit-description"]}>
                        Bounty creators have the opportunity to recognize and appreciate
                        the efforts of developers who contribute to their projects,
                        fostering a positive relationship with the community.
                    </p>
                </div>
            </div>
            <div className={styles.benefit}>
                <Image component={NextImage} src={WhoIsItForBenefit3Illustration} alt="people working together" className={styles["benefit-icon"]} />
                <div className={styles["benefit-text"]}>
                    <h2 className={styles["benefit-title"]}>Recognition and appreciation</h2>
                    <p className={styles["benefit-description"]}>
                        Projects that offer bounties may attract more attention and
                        interest from developers, leading to increased visibility and
                        exposure within the open-source community.
                    </p>
                </div>
            </div>
        </div>
    );
}
