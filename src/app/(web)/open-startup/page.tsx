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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opire - Open Startup",
  description:
    "We believe in transparency as the basis of trust. We want anyone to be able to see the real state of our project and share this journey with you.",
  keywords: [
    "bounty",
    "bounties",
    "bounty platform",
    "bounty hunter",
    "bounty hunting",
    "opire",
    "opiredev",
    "open source",
    "community",
    "OOS",
    "reward",
    "reward platform",
    "open startup",
    "OSS",
    "open-source",
    "open source bounties",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@opire_dev",
    creator: "@opire_dev",
    title: "Opire - Open Startup",
    description:
      "We believe in transparency as the basis of trust. We want anyone to be able to see the real state of our project and share this journey with you.",
    images: {
      url: "https://opire.dev/assets/images/opire/web/open-startup.png",
      alt: "Opire Website",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opire.dev",
    siteName: "Opire",
    title: "Opire - Open Startup",
    description:
      "We believe in transparency as the basis of trust. We want anyone to be able to see the real state of our project and share this journey with you.",
    images: [
      {
        url: "https://opire.dev/assets/images/opire/web/open-startup.png",
        width: 1901,
        height: 924,
        alt: "Opire Open Startup site",
      },
      {
        url: "https://opire.dev/assets/logo.png",
        width: 1920,
        height: 1920,
        alt: "Opire Logo",
      }
    ],
  }
};

export default async function OpenStartup() {
  const kpis: KPIs = await fetch(`https://api.opire.dev/analytics/kpis`).then((res) => res.json());

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
