import { Avatar, Card, Flex } from "@mantine/core";
import styles from "./styles.module.css";
import { Testimonial } from "../../_data/TESTIMONIALS_DATA";
import { IconBrandGithubFilled, IconBrandTwitterFilled } from "@tabler/icons-react";

export default function TestimonialCard({
  testimonial: {
    comment,
    fullname,
    username,
    avatar,
    link,
    platform,
    designation
  },
}: {
  testimonial: Testimonial;
}) {
  return (
    <Card className={styles.card}>
      <p className={styles.comment} dangerouslySetInnerHTML={{ __html: comment }}></p>

      <div className={styles.footer}>
        <div className={styles.user}>
          <Avatar size={"lg"} src={avatar} name={fullname} color="initials" alt={`avatar for ${fullname}`} />
          <Flex className={styles["user-data"]}>
            <p className={styles["fullname"]}>{fullname}</p>
            <small className={styles["username"]}>{username}</small>
            <small className={styles["username"]}>{designation}</small>
          </Flex>
        </div>
        <div>
          <a
            href={link}
            target="_blank"
            className={styles.platform}
            aria-label="Link to message"
          >
            {platform === "twitter" && <>
              <IconBrandTwitterFilled size={24} />
            </>}

            {platform === "github" && <>
              <IconBrandGithubFilled size={24} />
            </>}
          </a>
        </div>
      </div>
    </Card>
  );
}
