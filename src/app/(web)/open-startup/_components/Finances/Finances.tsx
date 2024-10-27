import styles from "./styles.module.css";

export function Finances() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Finances</h2>
            <div className={styles["description-group"]}>
                <p className={styles.description}>
                    We are a self-funded project. We don't have any external investors or funding at the moment. All the expenses are paid by the founders.
                </p>
                <p className={styles.description}>
                    To demonstrate our commitment to Opire we invest around <strong>$600</strong> per month in bounties.
                </p>
                <p className={styles.description}>
                    Currently Opire is not generating any revenue. We are working on a revenue model to make this project sustainable in the long term.
                </p>
            </div>
        </section>
    );
}
