import { Button, Card, Flex, Group } from "@mantine/core";
import classes from "./component.module.css";
import Link from "next/link";

export function UserCommentCard({
  name = "Dummy",
  comment = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem a sunt explicabo.",
  position = { x: 0, y: 0 },
}) {
  return (
    <Card
      className={classes.userCommentCard}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      <Group className={classes.userCommentCardHeader}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8718 16.2664C13.9704 14.4913 12.1274 13.2749 10.0002 13.2749C7.87309 13.2749 6.03003 14.4913 5.12866 16.2664C8.16049 18.5434 11.7472 18.5153 14.8718 16.2664Z"
            fill="white"
          />
          <path
            d="M14.8718 16.2664C13.9704 14.4913 12.1274 13.2749 10.0002 13.2749C7.87309 13.2749 6.03003 14.4913 5.12866 16.2664"
            stroke="white"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="9.99969"
            cy="8.42016"
            r="2.7019"
            fill="white"
            stroke="white"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="white"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1 style={{ margin: 0, fontSize: 14 }}>{name}</h1>
      </Group>
      <p className={classes.userCommentCardComment}>{comment}</p>
      <Flex className={classes.userCommentCardButtonsFlex}>
        <Link href="" className={classes.userCommentCardSkipButton}>
          Skip
        </Link>
        <Link href="" className={classes.UserCommentCardLearnMoreButton}>
          Learn More
        </Link>
      </Flex>
      <svg
        className={classes.UserCommentCardArrow}
        width="13"
        height="21"
        viewBox="0 0 13 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8366 8.78639C12.9138 9.58603 12.9138 11.1986 11.8366 11.9982L-9.08524e-07 20.7846L0 -6.11959e-07L11.8366 8.78639Z"
          fill="#1A1A1A"
          fill-opacity="0.7"
        />
      </svg>
    </Card>
  );
}
