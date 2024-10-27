import { Badge, Card, Group } from "@mantine/core";
import styles from "./styles.module.css";
import clsx from "clsx";
import NextLink from "next/link";

export default function FeaturedBountyCard({
  issueId,
  price,
  title,
  programmingLanguages,
  availableCommands,
  logoUrl,
}: {
  issueId: string;
  price: number;
  title: string;
  programmingLanguages: string[];
  availableCommands: boolean;
  logoUrl: string;
}) {
  return (
    <Card className={styles.card} component={NextLink} href={`https://app.opire.dev/issues/${issueId}`} target="_blank">
      <h1 className={styles.price}>{formatPrice(price)}</h1>
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
        {/* {!availableCommands && (
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
        src={logoUrl}
        alt="organization logo"
        height={36}
      />
    </Card>
  );
}

function formatPrice(price: number) {
  return (price / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}