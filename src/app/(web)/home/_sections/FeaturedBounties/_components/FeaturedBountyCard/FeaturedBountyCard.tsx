import { Badge, Card } from "@mantine/core";
import styles from "./styles.module.css";
import clsx from "clsx";
import NextLink from "next/link";
import { FeaturedIssue } from "../../_types/FeaturedIssue";
import { formatPrice } from "@/app/(web)/_shared/_utils/formatPrice";
import { CONFIG } from "@/app/(web)/_shared/config";

export function FeaturedBountyCard({
  id,
  pendingPrice,
  title,
  programmingLanguages,
  project,
  organization,
}: FeaturedIssue) {
  return (
    <Card className={styles.card} component={NextLink} href={`${CONFIG.OPIRE_APP_URL}/issues/${id}`} target="_blank">
      <h1 className={styles.price}>{formatPrice(pendingPrice)}</h1>
      <p className={styles.title}>
        {title.toUpperCase()}
      </p>
      <div className={styles.tags}>
        {programmingLanguages.map(programmingLanguage => (
          <Badge
            key={programmingLanguage}
            variant="outline"
            classNames={{
              root: clsx(
                styles.tag,
                styles["tag--programming-language"]
              ),
            }}
          >
            {programmingLanguage}
          </Badge>
        ))}
        {/* {!project.isBotInstalled && (
          <Badge
            variant="outline"
            className={clsx(
              styles.tag,
              styles["tag--not-available-commands"]
            )}
          >
            COMMANDS NOT AVAILABLE
          </Badge>
        )} */}
      </div>
      <img
        className={styles["organization-logo"]}
        src={organization.logoURL}
        alt="organization logo"
        height={36}
      />
    </Card>
  );
}