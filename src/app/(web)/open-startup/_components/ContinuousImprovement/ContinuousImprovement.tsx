import styles from "./styles.module.css";

export function ContinuousImprovement() {
    return (
        <section className={styles.section}>
            <div className={styles.banner}>
                <div className={styles.light}></div>
                <p className={styles.text}>
                    We will be adding more sections to report on the status of Opire and its evolution.
                    <br />
                    <br />
                    We are learning as we go along with the project so any feedback or suggestions are welcome.
                </p>
            </div>
        </section>
    );
}
