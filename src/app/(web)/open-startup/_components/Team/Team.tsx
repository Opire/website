import { TEAM_MEMBERS, EXTERNAL_COLLABORATORS } from "./_data/TEAM_DATA";
import styles from "./styles.module.css";
import { TeamMember } from "./_components/TeamMember/TeamMember";
import { ExternalCollaborator } from "./_components/ExternalCollaborator/ExternalCollaborator";

export function Team() {
    return (
        <div>
            <h2 className={styles.title}>Team</h2>

            <div className={styles["team-members"]}>
                {TEAM_MEMBERS.map((member) => (
                    <TeamMember {...member} />
                ))}
            </div>

            <h2 className={styles.title}>External Collaborators</h2>

            <div className={styles["external-collaborators"]}>
                {EXTERNAL_COLLABORATORS.map((member) => (
                    <ExternalCollaborator {...member} />
                ))}
            </div>
        </div>
    );
}
