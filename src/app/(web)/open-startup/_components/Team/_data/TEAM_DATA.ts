export interface TeamMemberType {
    name: string;
    role: string;
    salary: string;
    image: string;
    links: {
        linkedIn: string;
        twitter: string;
        github: string;
    }
}

export const TEAM_MEMBERS: TeamMemberType[] = [
    {
        name: "Iván Córdoba",
        role: "Co-Founder, CEO",
        salary: "$0",
        image: "/assets/images/team/ivan_cordoba.jpeg",
        links: {
            linkedIn: "https://www.linkedin.com/in/ivancordobadonet/",
            twitter: "https://x.com/_icordoba",
            github: "https://github.com/nabby27"
        }
    },
    {
        name: "Rubén Rüger",
        role: "Co-Founder, CTO",
        salary: "$0",
        image: "/assets/images/team/ruben_ruger.jpeg",
        links: {
            linkedIn: "https://www.linkedin.com/in/rruger/",
            twitter: "https://x.com/rrugerdev",
            github: "https://github.com/RubenRuCh"
        }
    }
]

export interface ExternalCollaboratorType {
    name: string;
    role: string;
    payment: string;
    image: string;
    engagement: string,
    links: {
        linkedIn: string;
    }
}

export const EXTERNAL_COLLABORATORS: ExternalCollaboratorType[] = [
    {
        name: "Marco",
        role: "UI/UX Designer",
        payment: "$450 - Redesign of the landing page",
        image: "/assets/images/team/marco_stroppiana.jpeg",
        engagement: "One Time",
        links: {
            linkedIn: "https://www.linkedin.com/in/mstroppiana/",
        }
    },
    {
        name: "Tommaso",
        role: "UI/UX Designer",
        payment: "$2,550 - Redesign of the webapp and creation of the design system",
        image: "/assets/images/team/tommaso_tavormina.jpeg",
        engagement: "One Time",
        links: {
            linkedIn: "https://www.linkedin.com/in/tommaso-tavormina-88b68b7b/",
        }
    },
    {
        name: "Anmol",
        role: "Technical Writer",
        payment: "$100 per post + $50 for every 10k views up to 20k views",
        image: "/assets/images/team/anmol_baranwal.jpeg",
        engagement: "About 2 posts per month",
        links: {
            linkedIn: "https://www.linkedin.com/in/anmol-baranwal/",
        }
    },
    {
        name: "Arindam",
        role: "Technical Writer",
        payment: "$150 per post",
        image: "/assets/images/team/arindam_majumder.jpeg",
        engagement: "About 2 posts per month",
        links: {
            linkedIn: "https://www.linkedin.com/in/arindam2004/",
        }
    }
] 