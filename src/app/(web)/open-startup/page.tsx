import styles from "./styles.module.css";
import { Header } from "../_shared/_components/Header/Header";
import { Footer } from "../_shared/_components/Footer/Footer";
import { LogoMask } from "../home/_sections/Hero/_components/LogoMask/LogoMask";
import { Container } from "../_shared/_components/Container/Container";
import { Team } from "./_components/Team/Team";
import { Finances } from "./_components/Finances/Finances";
import { Community } from "./_components/Community/Community";
import { ContinuousImprovement } from "./_components/ContinuousImprovement/ContinuousImprovement";
import { Growth, KPIs } from "./_components/Growth/Growth";
import { KpiBarChart } from "./_components/Growth/_components/KpiBarChart/KpiBarChart";

export default async function OpenStartup() {
  const kpis: KPIs = await fetch(`https://api.opire.dev/analytics/kpis`).then((res) => res.json());
  console.log(kpis)
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

          <Finances />

          <Community />

          <Growth kpis={kpis} />

          <ContinuousImprovement />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
