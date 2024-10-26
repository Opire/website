interface HeaderMenu {
    text: string;
    href: string;
    target?: string;
}

export const HEADER_MENU: HeaderMenu[] = [
    {
        text: "WHO IS IT FOR?",
        href: "/home#who-is-it-for",
    },
    {
        text: "HOW DOES IT WORK?",
        href: "/home#how-does-it-work",
    },
    {
        text: "PRICING",
        href: "/home#pricing",
    },
    {
        text: "FAQS",
        href: "/home#faq",
    },
    {
        text: "OPEN STARTUP",
        href: "/open-startup",
    },
    {
        text: "BLOG",
        href: "https://dev.to/opire",
        target: "_blank"
    }
]