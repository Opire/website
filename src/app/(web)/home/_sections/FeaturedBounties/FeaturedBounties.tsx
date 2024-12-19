import styles from "./styles.module.css";
import { FeaturedBountyCarousel } from "./_components/FeaturedBountyCarousel/FeaturedBountyCarousel";
import { FeaturedIssue } from "./_types/FeaturedIssue";
import { CONFIG } from "@/app/(web)/_shared/config";

export async function FeaturedBounties() {
  const featuredIssues = await fetch(`${CONFIG.OPIRE_API_URL}/issues/featured`).then(res => res.json() as Promise<FeaturedIssue[]>);

  if (featuredIssues.length === 0) {
    return <></>;
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Featured bounties</h1>
      <FeaturedBountyCarousel featuredIssues={featuredIssues} />
    </section>
  );
}
