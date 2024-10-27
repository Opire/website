import { TEAM_MEMBERS, EXTERNAL_COLLABORATORS } from "./_data/TEAM_DATA";
import styles from "./styles.module.css";
import { TeamMember } from "./_components/TeamMember/TeamMember";
import { ExternalCollaborator } from "./_components/ExternalCollaborator/ExternalCollaborator";

export function Team() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Team</h2>

            <div className={styles["team-members"]}>
                {TEAM_MEMBERS.map((member) => (
                    <TeamMember key={member.name} {...member} />
                ))}
            </div>

            <h3 className={styles.title2}>External Collaborators</h3>

            <div className={styles["external-collaborators"]}>
                {EXTERNAL_COLLABORATORS.map((member) => (
                    <ExternalCollaborator key={member.name} {...member} />
                ))}
            </div>
        </section>
    );
}
