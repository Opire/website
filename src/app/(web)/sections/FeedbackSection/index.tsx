import { Flex, Group } from "@mantine/core";
import classes from "./component.module.css";
import FeedbackCard from "./../../components/FeedbackCard/index";

export default function FeedbackSection() {
  return (
    <section id="#feedback" className={classes.feedback}>
      <Group className={classes.feedbackTitleSection}>
        <h1 className={classes.feedbackTitle}>
          We are building Opire with feedback from the best devs in the world
        </h1>
      </Group>
      <Group className={classes.feedbackContentSection}>
        <Flex className={classes.feedbackContentSectionFlex}>
          <FeedbackCard />
          <FeedbackCard
            comment="Osutas sit aspernatur aut odit aut fugi!!"
            fullname="Mortimer Sactum"
            user="@linddy_sims"
          />
          <FeedbackCard
            comment="Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
            fullname="Jenny Sackman"
            user="@jensack"
          />
        </Flex>
        <Flex className={classes.feedbackContentSectionFlex}>
          <FeedbackCard
            comment="Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
            fullname="Susana Erkit"
            user="@sus_erkit"
          />
          <FeedbackCard
            comment="I ❤️ @Opire"
            fullname="Felix Rodriquez"
            user="@felix_r"
          />
          <FeedbackCard
            comment="Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
            fullname="Maxi Tours"
            user="@max.tours"
          />
        </Flex>
        <Flex className={classes.feedbackContentSectionFlex}>
          <FeedbackCard
            comment="Atae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur "
            fullname="Ricardo Hernandez"
            user="@ricardo_hernandez"
          />
          <FeedbackCard
            comment="@GlittyApp y’all never let me down!"
            fullname="Mel Torteill"
            user="@meltorteill"
          />
          <FeedbackCard
            comment="Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
            fullname="Dionisia Fernandez"
            user="@dion-fer"
          />
        </Flex>
      </Group>
    </section>
  );
}
