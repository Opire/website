import { IconBrandLinkedin } from "@tabler/icons-react";
import { ExternalCollaboratorType } from "../../_data/TEAM_DATA";
import styles from "./styles.module.css";

export function ExternalCollaborator({
    name,
    role,
    payment,
    image,
    engagement,
    links,
}: ExternalCollaboratorType) {
    return (
        <div key={name} className={styles.card}>
            <div className={styles.content}>
                <img src={image} alt={name} className={styles.image} />
                <div className={styles.data}>
                    <a href={links.linkedIn} className={styles["name-link"]}><h3 className={styles.name}>{name}</h3></a>
                    <div className={styles.role}>{role}</div>
                </div>
            </div>

            <div className={styles["salary-value"]}>{payment}</div>
        </div>
    );
}
