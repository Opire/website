import { Group, Switch } from "@mantine/core";
import styles from "./styles.module.css";
import { IconCheck, IconX } from "@tabler/icons-react";
import clsx from "clsx";
import { OPButton } from "@/app/(web)/_shared/_components/Button/OPButton";
import { Price } from "@/app/(web)/_shared/_types/Price";
import { formatPrice } from "@/app/(web)/_shared/_utils/formatPrice";

export function PricingCard({
  price,
  anualPrice,
  saving,
  name,
  planFeatures,
  isHighlighted = false,
  isAnnual = false,
  onToggleAnnual,
}: {
  price: Price;
  anualPrice: Price;
  saving: string;
  name: string;
  planFeatures: {
    hasFeature: boolean;
    description: string;
  }[];
  isHighlighted: boolean;
  isAnnual?: boolean;
  onToggleAnnual: (newValue: boolean) => void;
}) {
  const currentPrice = isAnnual ? anualPrice : price;

  function getMonthlyPrice() {
    return formatPrice({
      value: currentPrice.value / (isAnnual ? 12 : 1),
      unit: currentPrice.unit
    })
  }

  return (
    <div
      className={clsx(
        styles.card,
        { [styles["card--highlighted"]]: isHighlighted },
      )}
    >
      <Group className={styles.header}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles["prices-container"]}>
          <div className={styles["old-price"]}>
            {isAnnual && <>
              {formatPrice(price)}
            </>}
          </div>
          <div className={styles["save-price"]}>
            {isAnnual && <>
              &nbsp; &nbsp; ({saving})
            </>}
          </div>
          <h2 className={styles.price}>{getMonthlyPrice()} / month</h2>
        </div>
        <Switch
          checked={isAnnual}
          color={"var(--color-light-primary)"}
          onChange={() => onToggleAnnual(!isAnnual)}
          label="Annual subscription"
        />
      </Group>

      <div className={styles.separator} />

      <ul className={styles.features}>
        {planFeatures.map((feature) => (
          <li
            key={feature.description}
            className={styles.feature}
          >
            <span className={styles["feature-icon"]}>
              {feature.hasFeature ? (
                <IconCheck size={25} stroke={1.5} color="var(--color-primary)" />
              ) : (
                <IconX size={25} stroke={1.5} color="var(--color-gray-4)" />
              )}
            </span>
            <span className={styles["feature-text"]}>
              {feature.description}
            </span>
          </li>
        ))}
      </ul>

      {/* <div className={styles.footer}>
        <OPButton
          size="big"
          variant={isHighlighted ? "primary" : "secondary"}
          fullWidth
        >
          GET STARTED
        </OPButton>
      </div> */}
    </div>
  );
}
