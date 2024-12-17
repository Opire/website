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
                href: "https://discord.gg/Rfq8CMZH4b",
                target: "_blank",
            },
            {
                text: "Reddit",
                href: "https://www.reddit.com/r/opire",
                target: "_blank",
            },
            {
                text: "Twitter",
                href: "https://twitter.com/opire_dev",
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
                href: "mailto:team@opire.dev",
                target: "_blank",
            },
            {
                text: "Ko-fi",
                href: "https://ko-fi.com/opire",
                target: "_blank",
            },
        ]
    },
    {
        title: "Resource",
        links: [
            {
                text: "Docs",
                href: "https://docs.opire.dev",
                target: "_blank",
            },
            {
                text: "GitHub",
                href: "https://github.com/opire",
                target: "_blank",
            },
            {
                text: "LinkedIn",
                href: "https://www.linkedin.com/company/opire",
                target: "_blank",
            },
        ]
    }
]