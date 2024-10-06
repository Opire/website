import { Badge, Button, Card, Flex, Group, Switch } from "@mantine/core";
import classes from "./component.module.css";
import { useEffect, useState } from "react";
export default function PricingCard({
  price = 100,
  anualPrice = 80,
  saving = 20,
  name = "Starter",
  lightPlan = false,
  planFeatures = [{ active: false, description: "Featured publication" }],
}) {
  const [currentPrice, setCurrentPrice] = useState(price);
  const [isAnually, setIsAnually] = useState(false);

  useEffect(() => {
    setCurrentPrice(isAnually ? anualPrice : price);
  }, [isAnually]);

  return (
    <Card
      className={lightPlan ? classes.pricingCardLightPlan : classes.pricingCard}
    >
      <Group className={classes.pricingCardStartSection}>
        <h1 className={classes.pricingCardName}>{name}</h1>
        <Group className={classes.pricingCardPricesSection}>
          {isAnually && (
            <small className={classes.pricingCardOldPrice}>
              ${price} <span>({saving}% saving)</span>
            </small>
          )}
          <h2 className={classes.pricingCardPrice}>${currentPrice} / month</h2>
        </Group>
        <Switch
          checked={isAnually}
          onChange={(event) => setIsAnually(event.currentTarget.checked)}
          label="Annual subscription"
        />
      </Group>
      <div className={classes.pricingCardSeparator} />
      <Flex className={classes.pricingCardFeatures}>
        {planFeatures.map((feature, i) => {
          return (
            <p
              key={i + feature.description}
              className={classes.pricingCardFeature}
            >
              {feature.active ? (
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1667 6.5L9.16669 17.5L4.16669 12.5"
                    stroke="#1E9387"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="25"
                  height="25"
                  viewBox="-5 -5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.166687"
                    y="14.8639"
                    width="20"
                    height="2"
                    rx="1"
                    transform="rotate(-45 0.166687 14.8639)"
                    fill="#C0C0C0"
                  />
                  <rect
                    width="20"
                    height="2"
                    rx="1"
                    transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.1667 14.8639)"
                    fill="#C0C0C0"
                  />
                </svg>
              )}{" "}
              {feature.description}
            </p>
          );
        })}
      </Flex>
      <Button
        className={
          lightPlan ? classes.pricingCardButton : classes.pricingCardButtonPro
        }
      >
        {lightPlan ? "GET STARTED WITH LIGHT PLAN" : "GET STARTED WITH PRO"}
      </Button>
    </Card>
  );
}
