import styles from "./styles.module.css";

export function Container({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
