import styles from "./styles.module.css";
import { Header } from "../_shared/_components/Header/Header";
import { Footer } from "../_shared/_components/Footer/Footer";
import { LogoMask } from "../home/_sections/Hero/_components/LogoMask/LogoMask";
import { Container } from "../_shared/_components/Container/Container";
import { Team } from "./_components/Team/Team";

export default function OpenStartup() {
  return (
    <div className={styles.page}>
      <Header />
      <LogoMask />
      <main className={styles.main}>
        <Container>
          <h1 className={styles.title}>Open Startup</h1>
          <p className={styles.description}>
            We believe in transparency as the basis of trust.
            <br />
            <br />
            We want anyone to be able to see the real state of our project and share this journey with you.
          </p>

          <Team />

          {/* <ExternalTeam /> */}

        </Container>
      </main>
      <Footer />
    </div>
  );
}
