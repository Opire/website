interface FeaturedBountiesType {
    issueId: string;
    price: number;
    programmingLanguages: string[];
    availableCommands: boolean;
    title: string;
    logoUrl: string;
}

export const FEATURED_BOUNTIES: FeaturedBountiesType[] = [
    {
        issueId: '01HWJNZ5HQMVG2TCW6XHQQJ3QT',
        price: 100000,
        programmingLanguages: ["TypeScript"],
        availableCommands: false,
        title: "Migration generation drops and creates columns instead of altering resulting in data loss",
        logoUrl: "https://avatars.githubusercontent.com/u/20165699?v=4",
    },
    {
        issueId: '01J8YJ06HPSY7ZAMAW08T83YBD',
        price: 40000,
        programmingLanguages: ["C++"],
        availableCommands: false,
        title: "Web platform exports are not supported when using the C# (.NET) version of the engine",
        logoUrl: "https://avatars.githubusercontent.com/u/6318500?v=4",
    },
    {
        issueId: '01J73BXYSGA83XKW25TPF2QMK0',
        price: 8000,
        programmingLanguages: ["Python"],
        availableCommands: false,
        title: "Add Wayland support",
        logoUrl: "https://avatars.githubusercontent.com/u/8991074?v=4",
    },
    {
        issueId: '01J8T24PJDXX69RM7XV24SQT11',
        price: 7000,
        programmingLanguages: ["Rust"],
        availableCommands: false,
        title: "feat: view test coverage in editor",
        logoUrl: "https://avatars.githubusercontent.com/u/42048915?v=4",
    },
    {
        issueId: '01HWT2MKE4GWPJXDPMAFEAHHHE',
        price: 6000,
        programmingLanguages: ["TypeScript"],
        availableCommands: false,
        title: "[V4] QueryEngine - deleteMany not working when filter by nested entity.",
        logoUrl: "https://avatars.githubusercontent.com/u/19872173?v=4",
    },
    {
        issueId: '01J8898W2WES9F4FJ57GDG0BYS',
        price: 5000,
        programmingLanguages: ["JavaScript"],
        availableCommands: false,
        title: "incorrect code-hinter header text",
        logoUrl: "https://avatars.githubusercontent.com/u/82193554?v=4",
    },
    {
        issueId: '01HWR47X4ZNKQ6H822NASV13VW',
        price: 3000,
        programmingLanguages: ["TypeScript"],
        availableCommands: false,
        title: "[BUG] Reorder doesn't work with Next.js",
        logoUrl: "https://avatars.githubusercontent.com/u/42876?v=4",
    },
    {
        issueId: '01HWXC6ZBQ5X1AZ3QJJWCWXCVV',
        price: 2000,
        programmingLanguages: ["TypeScript"],
        availableCommands: true,
        title: "Add i18n to documenso",
        logoUrl: "https://avatars.githubusercontent.com/u/127681099?v=4",
    },
]