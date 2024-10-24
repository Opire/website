import styles from "./styles.module.css";
import { HeaderDesktop } from "./_components/HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./_components/HeaderMobile/HeaderMobile";
import clsx from "clsx";
import { Container } from "../Container/Container";

export function Header() {
  return (
    <header className={clsx(styles.header)}>
      <Container>
        <div className={clsx(styles["header-content"], styles["header-desktop"])}>
          <HeaderDesktop />
        </div>
        <div className={clsx(styles["header-content"], styles["header-mobile"])}>
          <HeaderMobile />
        </div>
      </Container>
    </header>
  );
}
