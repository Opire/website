import styles from "./styles.module.css";
import Step1 from '../../../../../../public/assets/illustrations/step-1.svg'
import Step2 from '../../../../../../public/assets/illustrations/step-2.svg'
import Step3 from '../../../../../../public/assets/illustrations/step-3.svg'
import Step4 from '../../../../../../public/assets/illustrations/step-4.svg'
import PathArrow from "./_components/PathArrow/PathArrow";
import Step from "./_components/Step/Step";

export default function HowDoesItWork() {
  return (
    <section id="how-does-it-work" className={styles.section}>
      <div className={styles["title-container"]}>
        {/* <div className={styles.light}></div> */}
        <h1 className={styles.title}>How Does It Work?</h1>
      </div>
      <div className={styles.steps}>
        <Step
          title="Find an issue you want to see solved"
          description="Browse through the open issues and find the ones you want to see solved. Choose the issues that fit your needs or interests."
          stepNumber={1}
          icon={Step1}
          position="left"
        />

        <PathArrow direction="right" variant={1} />

        <Step
          title="Create a bounty for that issue"
          description="Set a bounty to attract developers to tackle the issue. If someone already set a bounty, you can add more funds to increase the reward."
          stepNumber={2}
          icon={Step2}
          position="right"
        />

        <PathArrow direction="left" variant={1} />

        <Step
          title="Wait for developers to solves the issue"
          description="Once your bounty is published, sit back and let the developers come up with their solutions. Subscribe to the GitHub issue to receive updates."
          stepNumber={3}
          icon={Step3}
          position="left"
        />

        <PathArrow direction="right" variant={1} />

        <Step
          title="Pay the developer who solve the issue"
          description="Once a developer solves the problem, pay the agreed bounty. Enjoy the results of your investment and continue supporting open source!"
          stepNumber={4}
          icon={Step4}
          position="right"
        />
      </div>
    </section>
  );
}
