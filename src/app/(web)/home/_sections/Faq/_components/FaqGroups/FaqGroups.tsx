import clsx from "clsx";
import { FAQ_GROUPS, FaqGroupType } from "../../_data/FAQs";
import styles from "./styles.module.css";

export function FaqGroup({
    activeGroup,
    onClickGroup,
    faqs,
}: {
    activeGroup: FaqGroupType;
    onClickGroup: (group: FaqGroupType) => void;
    faqs: JSX.Element
}) {
    return (
        <>
            <div className={styles.container}>
                {FAQ_GROUPS.map((group) => (
                    <div key={group} className={styles["group-container"]}>
                        <span className={clsx(
                            styles["group-indicator"],
                            { [styles["group-indicator--active"]]: activeGroup === group },
                        )}>
                        </span>
                        <button onClick={() => onClickGroup(group)} className={clsx(
                            styles["group-name"],
                            { [styles["group-name--active"]]: activeGroup === group },
                        )}>
                            {group}
                        </button>
                    </div>
                ))}
            </div>

            {faqs}
        </>
    );
}
