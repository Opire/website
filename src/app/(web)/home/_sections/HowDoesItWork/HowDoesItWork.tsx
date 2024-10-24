import { Image } from "@mantine/core";
import styles from "./styles.module.css";
import clsx from "clsx";
import NextImage from "next/image";
import Step1 from '../../../../../../public/assets/illustrations/step-1.svg'
import Step2 from '../../../../../../public/assets/illustrations/step-2.svg'
import PathArrow from "./_components/PathArrow/PathArrow";

export default function HowDoesItWork() {
  return (
    <section id="how-does-it-work" className={styles.section}>
      <div className={styles["title-container"]}>
        {/* <div className={styles.light}></div> */}
        <h1 className={styles.title}>How Does It Work?</h1>
      </div>
      <div className={styles.steps}>
        <div className={clsx(styles.step, styles.step1)}>
          <Image component={NextImage} src={Step1} alt="step 1" className={styles["step-icon"]} />
          <h2 className={styles["step-title"]}>Find a project you want to improve</h2>
          <p className={styles["step-description"]}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>

        <PathArrow />

        <div className={clsx(styles.step, styles.step2)}>
          <Image component={NextImage} src={Step2} alt="step 2" className={styles["step-icon"]} />

          <h2 className={styles["step-title"]}>Create bounties for their issues</h2>
          <p className={styles["step-description"]}>
            Atae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
          </p>
        </div>
      </div>
    </section>
  );
}
