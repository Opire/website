import { CONFIG } from "../../../config";

interface Link {
    text: string;
    href: string;
    target?: string;
}

export interface FooterGroupType {
    title: string;
    links: Link[];
}

export const FOOTER_LINKS: FooterGroupType[] = [
    {
        title: "Company",
        links: [
            {
                text: "How it Works?",
                href: "/home#how-does-it-work",
            },
            {
                text: "Pricing",
                href: "/home#pricing",
            },
            // {
            //     text: "Features",
            //     href: "#",
            // },
            {
                text: "FAQs",
                href: "/home#faq",
            },
            {
                text: "Blog",
                href: "https://dev.to/opire",
                target: "_blank",
            },
            // {
            //     text: "Team",
            //     href: "#",
            // },
        ],
    },
    {
        title: "Community",
        links: [
            {
                text: "Discord",
                href: CONFIG.DISCORD_LINK,
                target: "_blank",
            },
            {
                text: "Reddit",
                href: CONFIG.REDDIT_LINK,
                target: "_blank",
            },
            {
                text: "Twitter",
                href: CONFIG.TWITTER_LINK,
                target: "_blank",
            },
        ],
    },
    // {
    //     title: "Platform",
    //     links: [
    //         {
    //             text: "Security",
    //             href: "#",
    //         },
    //         {
    //             text: "Roadmap",
    //             href: "#",
    //         },
    //         {
    //             text: "Features",
    //             href: "#",
    //         },
    //         {
    //             text: "Enterprise",
    //             href: "#",
    //         },
    //     ],
    // },
    {
        title: "Legal",
        links: [
            {
                text: "Terms of Service",
                href: "/terms-of-service",
            },
            {
                text: "Privacy Policy",
                href: "/privacy-policy",
            },
            {
                text: "Cookie Policy",
                href: "/cookie-policy",
            },
            // {
            //     text: "Feedback",
            //     href: "#",
            // },
        ]
    },
    {
        title: "Support",
        links: [
            {
                text: "FAQs",
                href: "/home#faq",
            },
            {
                text: "Contact Us",
                href: `mailto:${CONFIG.OPIRE_EMAIL}`,
                target: "_blank",
            },
            {
                text: "Ko-fi",
                href: CONFIG.KOFI_LINK,
                target: "_blank",
            },
        ]
    },
    {
        title: "Resource",
        links: [
            {
                text: "Docs",
                href: CONFIG.OPIRE_DOCS_URL,
                target: "_blank",
            },
            {
                text: "GitHub",
                href: CONFIG.GITHUB_LINK,
                target: "_blank",
            },
            {
                text: "LinkedIn",
                href: CONFIG.LINKEDIN_LINK,
                target: "_blank",
            },
        ]
    }
]