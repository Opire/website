import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { TeamMemberType } from "../../_data/TEAM_DATA";
import styles from "./styles.module.css";

export function TeamMember({
    name,
    role,
    salary,
    image,
    links,
}: TeamMemberType) {
    return (
        <div key={name} className={styles.card}>
            <div className={styles.content}>
                <img src={image} alt={name} className={styles.image} />
                <div className={styles.data}>
                    <h3 className={styles.name}>{name}</h3>
                    <div className={styles.role}>{role}</div>
                </div>
            </div>

            <div className={styles.salary}>Salary: <span className={styles["salary-value"]}>{salary}</span></div>

            <div className={styles.links}>
                {links.linkedIn && <a href={links.linkedIn}>
                    <IconBrandLinkedin size={32} stroke={1} color="white" />
                </a>}
                {links.twitter && <a href={links.twitter}>
                    <IconBrandX size={32} stroke={1} color="white" />
                </a>}
                {links.github && <a href={links.github}>
                    <IconBrandGithub size={32} stroke={1} color="white" />
                </a>}
            </div>
        </div>

    );
}
