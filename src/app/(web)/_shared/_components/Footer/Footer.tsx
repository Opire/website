import styles from "./styles.module.css";
import { Container } from "../Container/Container";
import { FOOTER_LINKS, FooterGroupType } from "./_data/FOOTER_LINKS";

export function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <div className={styles.content}>
          {FOOTER_LINKS.map((group) => (
            <FooterGroup key={group.title} {...group} />
          ))}
        </div>

        <div className={styles["footer-sentence"]}>2024 - Rewarded with Opire 💚</div>
      </footer>
    </Container>
  );
}

function FooterGroup({
  title,
  links
}: FooterGroupType) {
  return (
    <div className={styles["group"]}>
      <h1 className={styles["group-title"]}>{title}</h1>
      <ul className={styles["group-list"]}>
        {links.map((link) => (
          <li key={link.text} className={styles["list-item"]}>
            <a className={styles["link"]} href={link.href} target={link.target}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}