import { Badge, Card, Group } from "@mantine/core";
import classes from "./component.module.css";
export default function FeaturedRewardCard({
  price = 100,
  description = "Migration generation drops and creates columns instead of  al...",
  programmingLang = "TYPESCRIPT",
  availableCommands = false,
  logo = "/assets/logos/framer.png",
}) {
  return (
    <Card className={classes.featuredRewardCard}>
      <h1 className={classes.featuredRewardCardPrice}>${price}</h1>
      <p className={classes.featuredRewardCardDescription}>
        {description.toUpperCase()}
      </p>
      <Group className={classes.featuredRewardCardChips}>
        {programmingLang && programmingLang != "" && (
          <Badge
            variant="outline"
            className={classes.featuredRewardCardProgrammingLang}
          >
            {programmingLang}
          </Badge>
        )}
        {!availableCommands && (
          <Badge
            variant="outline"
            className={classes.featuredRewardCardAvailableCommands}
          >
            COMMANDS NOT AVAILABLE
          </Badge>
        )}
      </Group>
      {logo && logo != "" && (
        <img
          className={classes.featuredRewardCardLogo}
          src={logo}
          alt=""
          height={36}
        />
      )}
    </Card>
  );
}
