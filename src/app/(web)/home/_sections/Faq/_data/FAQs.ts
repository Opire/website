export type FaqGroup = "General" | "Payments" | "Bounties" | "Tips" | "Pricing";

export const FAQ_GROUPS: FaqGroup[] = ["General", "Payments", "Bounties", "Tips", "Pricing"];

export interface Faq {
    id: string;
    question: string;
    answer: string;
}

const generalFaqs: Faq[] = [
    {
        id: "0",
        question: "In which countries can I use Opire?",
        answer: `
            Opire does not explicitly prohibit its use in any country. However, when using a payment provider like Stripe, the user is subject to the conditions imposed by Stripe.
            <br/><br/>
            Before creating a reward, make sure that your country is supported on Stripe.
            <br/><br/>
            You can check the list of supported countries <a href="https://www.linkedin.com/feed/update/urn:li:activity:7223750176866258944" target="_blank">in our LinkedIn post</a>
        `,
    },
    {
        id: "1",
        question: "Can Opire be used in private projects?",
        answer: `
            Yes, our commands can be used within private projects, but there is a detail to consider.
            <br/><br/>
            The created rewards will appear on the Opire platform, but developers without access to the project won't be able to try to solve the issues or claim the rewards.
            <br/><br/>
            If external people want to collaborate, they'll need to communicate directly with the project administrator to request access.
        `,
    },
    {
        id: "2",
        question: "Who is Opire for?",
        answer: `
            Several groups can benefit from Opire:
            <br/>
            <ul>
                <li>
                    <strong>Developers</strong>: It is an opportunity to earn extra income without being tied to schedules or cumbersome procedures. Additionally, you'll enhance your skills by solving real problems in different languages.
                </li>
                <br/>
                <li>
                    <strong>Companies</strong>: We facilitate problem resolution in your project dependencies without involving your development team. Therefore, you can optimize your costs by focusing resources on what adds value to the company.
                </li>
                <br/>
                <li>
                    <strong>Open-Source Code Owners</strong>: You can leverage Opire to grow your community and keep your project alive with contributions from other developers.
                </li>
                <br/>
                <li>
                    <strong>Open-Source Enthusiasts</strong>: Unlike donation platforms, bounties on Opire are tied to a real project issue, directly impacting the improvement of code quality. You won't be an anonymous donor, instead you will actively participate in project enhancement and growth.
                </li>
            </ul>
        `,
    },
    {
        id: "3",
        question: "If I want to create bounties, do I have to configure Stripe?",
        answer: `
            No.
            <br/><br/>
            You only need to enter a payment method when paying for the bounties you've previously created.
        `,
    },
    {
        id: "4",
        question: "As a developer, what happens if I don't have my Stripe account configured when claiming the bounty?",
        answer: `
           If someone has tried to pay you but your Stripe account wasn't configured, the payment cannot be processed, and we will notify you to configure your account.
           <br/><br/>
           Once configured, contact the bounty creator asking them to retry the payment process.
        `,
    },
];

const paymentsFaqs: Faq[] = [
    {
        id: "0",
        question: "How are payments made on Opire?",
        answer: `
            Payments are processed through Stripe. Once an issue is solved and bounty creators proceed with payment, developers receive the money directly into their configured Stripe account.
        `,
    },
    {
        id: "1",
        question: "If I receive income, how do I declare the benefits?",
        answer: `
            Since you can receive income from anywhere in the world, we can't provide a solution that fits the requirements of each country (it's out of our scope).
            <br/><br/>
            The person receiving the income is responsible for complying with their country's legislation, declaring it as required in each case. You can obtain a list of your income directly from your Stripe account.
        `,
    },
    {
        id: "2",
        question: "What if I don't get paid for the bounty?",
        answer: `
            If you find yourself in that situation, we're sorry for what happened 💔
            <br/><br/>
            First, try to communicate with the bounty creator. They may not be aware that they can already pay you, they may have forgotten, or they haven't been able to do so yet. We trust the community and its ability to resolve conflicts through dialogue.
            <br/><br/>
            Opire is a tool designed for the community, and we hope it is used in the right way. We understand that it's not always the case, and for situations where a user has created many bounties that they don't intend to pay, Opire has algorithms that detect such behavior and disable the user to prevent further harm to the community. These users won't be able to create more bounties until they process the payment for the pending ones.
        `,
    },
    {
        id: "3",
        question: "What happens to my money if Opire disappears?",
        answer: `
            You wouldn't lose a single cent.
            <br/><br/>
            At Opire, we don't retain funds for future use. Your money will always be in your hands until you decide to pay the developer.
            <br/><br/>
            We also won't ask for your credit card or banking information. We don't have access to that data (nor do we want it), so there will never be any unexpected payments.
            <br/><br/>
            When you make a payment on Opire, everything is handled through Stripe, and developers receive their share directly. Opire only keeps the corresponding % for our fee when processing bounties/tips payments.
        `,
    },
    {
        id: "4",
        question: "When do I receive my payment?",
        answer: `
            Once the bounty creator initiates the payment, the funds will be transferred to your Stripe account within 1 to 7 days, depending on the chosen payment method.
        `,
    },
];

const bountiesFaqs: Faq[] = [
    {
        id: "0",
        question: "How do I create a bounty?",
        answer: `
            If the repository has <a href="https://github.com/marketplace/opirebot" target="_blank">OpireBot</a> installed, you can use its available <a href="https://docs.opire.dev/overview/commands" target="_blank">commands</a>. Otherwise, you can create the bounty directly on the Opire website from your dashboard, just provide the issue URL and the bounty amount.
        `,
    },
    {
        id: "1",
        question: "Can I create a bounty for any issue?",
        answer: `
            Yes, you can create a bounty for any issue on GitHub. However, if the repository does not have <a href="https://github.com/marketplace/opirebot" target="_blank">OpireBot</a> installed, it must be public.
        `,
    },
    {
        id: "2",
        question: "How do I claim a bounty?",
        answer: `
            To claim a bounty, you must solve the associated issue and create a valid PR.
            <br/><br/>
            If the repository has <a href="https://github.com/marketplace/opirebot" target="_blank">OpireBot</a> installed you can claim the reward using <a href="https://docs.opire.dev/overview/commands" target="_blank">our commands</a>, otherwise you will have to claim the reward from your Opire dashboard.
        `,
    },
    {
        id: "3",
        question: "Can multiple developers work on the same bounty?",
        answer: `
            Yes.
            <br/><br/>
            The bounty creator will decide who to pay, typically rewarding the developer whose PR gets merged.
        `,
    },
    {
        id: "4",
        question: "How are bounties priced?",
        answer: `
           Bounties are set by the people who want the issue to be solved, based on the complexity and urgency. Bounties can be stacked so different people can put in different amounts.
        `,
    },
    {
        id: "5",
        question: "What happens if my PR is rejected?",
        answer: `
           If your PR does not meet the required standards, it may be rejected. However, you can work on improving it and resubmit it until it is approved, or another developer's solution may be accepted.
           <br/><br/>
           In any case, keep in mind that you will have improved your skills and helped contribute to an open-source project.
        `,
    }
]

const tipsFaqs: Faq[] = [
    {
        id: "0",
        question: "How can I increase my chances of getting a tip?",
        answer: `
            It's simple! Focus on helping others. If the project's community sees you're active and supportive, they may choose to tip you. Give before you receive, and let karma do the rest.
        `,
    },
    {
        id: "1",
        question: "How do I tip a developer?",
        answer: `
            Tips are only available with OpireBot <a href="https://docs.opire.dev/overview/commands" target="_blank">commands</a>, so the repository must have it installed.
        `,
    },
    {
        id: "2",
        question: "How are tips different from bounties?",
        answer: `
            Tips are a way to reward developers for their contributions, even if they didn't solve the issue. They are a way to show appreciation for the well work done.
        `,
    },
    {
        id: "3",
        question: "Can I tip a developer even if the issue didn't have a bounty?",
        answer: `
            Yes, you can tip a developer at any time, even if the issue didn't have a bounty.
        `,
    },
    {
        id: "4",
        question: "When should I tip a developer?",
        answer: `
            You can tip a developer at any time, but it's usually done after the developer has helped you or the community in some way (e.g., providing support, helping to solve an issue, sharing knowledge, etc.).
        `,
    },
]

const pricingFaqs: Faq[] = [
    {
        id: "0",
        question: "Is Opire free to use?",
        answer: `
            Yes, Opire is free to use, and we only charge a fee for processing payments.
            <br/><br/>
            You can reduce or even eliminate this fee by subscribing to one of our subscription plans.
        `,
    },
    {
        id: "1",
        question: "How much does Opire charge?",
        answer: `
            Opire charges a fee of 4% for bounties and 10% for tips on top of the bounty/tip amount. For developers, there are no fees for claiming bounties or receiving tips, always receiving the 100% of the amount.
            <br/><br/>
            You can see how the final cost of the <a href="https://docs.opire.dev/rewards/pricing#playground" target="_blank">bounty</a> or <a href="https://docs.opire.dev/tips/pricing#playground" target="_blank">tips</a> would be in the calculator in the documentation.
        `,
    },
    {
        id: "2",
        question: "Are there any subscription plans?",
        answer: `
            Yes, Opire offers different subscription plans to adapt to the needs of each user or organization. With theses plans you can save money on fees and get access to exclusive features.
        `,
    },
    {
        id: "3",
        question: "What are the total fee costs?",
        answer: `
            The total fees consist of both the Opire fee and the Stripe fee.
            <br/><br/>
            For bounties, the Opire fee is 4% of the bounty amount, in addition to the Stripe fee of 5.25% + $0.85.
            <br/><br/>
            For tips, the Opire fee is 10% of the tip amount, along with the Stripe fee of 5.25% + $0.85.
        `,
    },
    {
        id: "4",
        question: "Can I upgrade or downgrade my subscription plan?",
        answer: `
            Yes, you can upgrade, downgrade or cancel your subscription plan at any time.
            <br/><br/>
            If you upgrade, the new plan will be applied immediately, and the difference will be charged. If you downgrade, the new plan will be applied at the end of the current billing cycle. If you cancel, the plan will be applied until the end of the current billing cycle.
            <br/><br/>
            You will need to make these changes in your Stripe account which you can access from Opire.
        `,
    }
]

type FaqCategory = {
    [K in FaqGroup]: Faq[];
};

export const FAQs: FaqCategory = {
    "General": generalFaqs,
    "Payments": paymentsFaqs,
    "Bounties": bountiesFaqs,
    "Tips": tipsFaqs,
    "Pricing": pricingFaqs,
}