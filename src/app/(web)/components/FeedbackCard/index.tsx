import { Avatar, Badge, Card, Flex, Group } from "@mantine/core";
import classes from "./component.module.css";
export default function FeedbackCard({
  comment = "Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea com.",
  fullname = "Daniel Fritzman",
  user = "@dan_dev",
  userImg = "",
}) {
  return (
    <Card className={classes.feedbackCard}>
      <p className={classes.feedbackCardComment}>{comment}</p>

      <Group className={classes.feedbackCardUser}>
        <Avatar size={"lg"} src={userImg} name={fullname} color="initials" />
        <Flex className={classes.feedbackCardUserFlex}>
          <p>{fullname}</p>
          <small>{user}</small>
        </Flex>
      </Group>
    </Card>
  );
}
