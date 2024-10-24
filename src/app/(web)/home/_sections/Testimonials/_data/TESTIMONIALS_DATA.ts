export interface Testimonial {
    id: string;
    comment: string;
    fullname?: string;
    username?: string;
    avatar?: string;
    link?: string;
    platform?: "twitter" | "github";
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "0",
        comment: `
            Is there a platform where I can sponsor people to add features to an OSS project?
            <br/><br/>
            For example, let's say I have to implement a feature on @OramaSearch but I have no capacity right now.Is there a place where I can put a kind of "bounty"(I know it's not the right word) on this activity?
        `,
        fullname: "Michele Riva",
        avatar: "https://pbs.twimg.com/profile_images/1839808673075367936/Yka3_FKy_normal.jpg",
        username: "@MicheleRivaCode",
        link: "https://x.com/MicheleRivaCode/status/1674687396636442625?t=yveldrNE0DWGfKnnix9c_Q&s=08",
        platform: "twitter"
    },
    {
        id: "1",
        comment: `
            Thank you both!
            <br/>
            I never thought the day would come when I could earn money from OSS. 🥳
            <br/><br/>
            Once this busy weekend is over, I’ll try applying for them.
        `,
        fullname: "Yuji Sugiura",
        avatar: "https://avatars.githubusercontent.com/u/6259812?s=80&u=28e36fb88a7aca1a00b81e335f4e83203a306599&v=4",
        username: "@leaysgur",
        link: "https://github.com/oxc-project/oxc/issues/611#issuecomment-2336507444",
        platform: "github"
    },
    {
        id: "2",
        comment: `
            I encountered this issue on November 5, 2022.
            <br/><br/>
            This discussion started on December 22, 2021.
            <br/><br/>
            Now it's August 2024, and still NOTHING has changed - just some workarounds and hacks.
            <br/><br/>
            It makes me want to cry and laugh at the same time
        `,
        fullname: "Maciej Sykuła",
        avatar: "https://avatars.githubusercontent.com/u/11634131?v=4",
        username: "@MHase",
        link: "https://github.com/strapi/strapi/issues/11998#issuecomment-2294996134",
        platform: "github"
    },
    {
        id: "3",
        comment: `
            Is there a way to give bounties for devs that find non-security related bugs, or event issues on your open source project?
        `,
        fullname: "Ivan Burazin",
        avatar: "https://pbs.twimg.com/profile_images/1549052013178134529/FljtGcgj_400x400.jpg",
        username: "@ivanburazin",
        link: "https://x.com/ivanburazin/status/1810013652948504623",
        platform: "twitter"
    },
];