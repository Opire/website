import styles from "./styles.module.css";

export function Community() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Community</h2>

            <a href="https://discord.gg/jWwwsHRbnJ" target="_blank" className={styles.discord}><img src="https://invidget.switchblade.xyz/jWwwsHRbnJ" alt="Discord link image" /></a>
        </section>
    );
}
