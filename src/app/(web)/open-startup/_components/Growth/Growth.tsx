import { KpiBarChart } from "./_components/KpiBarChart/KpiBarChart";
import { KpiNumber } from "./_components/KpiNumber/KpiNumber";
import { KpiPrice } from "./_components/KpiPrice/KpiPrice";
import styles from "./styles.module.css";

export interface KPIs {
    totalRewardsPaid: number;
    moneyPaidInRewards: {
        value: number;
        unit: 'USD' | 'USD_CENT';
    };
    activeRewardsAvailable: number;
    moneyAvailableInRewards: {
        value: number;
        unit: 'USD' | 'USD_CENT';
    };
    rewardsPerMonth: { month: string, numberOfRewards: number }[];
    usersLoggedIn: number;
    projectsWithBotInstalled: number;
    projectsBenefited: number;
}

export function Growth({
    kpis,
}: {
    kpis: KPIs
}) {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Growth</h2>

            <div className={styles.kpis}>
                <KpiNumber
                    title="Total Bounties Paid"
                    tooltip="The total sum of all bounties paid to developers who have solved issues on Opire. An issue may have more than one bounty."
                    value={kpis.totalRewardsPaid}
                />

                <KpiPrice
                    title="Money Paid in Bounties"
                    tooltip="The total amount of money paid in bounties. An issue may have more than one bounty."
                    price={kpis.moneyPaidInRewards}
                />

                <KpiNumber
                    title="Available Bounties"
                    tooltip="The total amount of money paid in bounties. An issue may have more than one bounty."
                    value={kpis.activeRewardsAvailable}
                />

                <KpiPrice
                    title="Money Available in Bounties"
                    tooltip="The total amount of money currently available in active bounties. An issue may have more than one bounty."
                    price={kpis.moneyAvailableInRewards}
                />
            </div>

            <KpiBarChart
                title="Bounties per Month"
                tooltip="The number of bounties created each month."
                data={kpis.rewardsPerMonth}
                xField="month"
                config={[
                    { name: 'numberOfRewards', color: 'var(--color-primary)', label: 'Bounties' },
                ]}
            />

            <div className={styles.kpis}>
                <KpiNumber
                    title="Users"
                    tooltip="The total number of users who have logged into Opire."
                    value={kpis.usersLoggedIn}
                />

                <KpiNumber
                    title="Projects with OpireBot"
                    tooltip="The total number of projects that have OpireBot installed."
                    value={kpis.projectsWithBotInstalled}
                />

                <KpiNumber
                    title="Projects Benefited"
                    tooltip="The total number of projects that have received contributions or had issues resolved through Opire."
                    value={kpis.projectsBenefited}
                />
            </div>
        </section>
    );
}
