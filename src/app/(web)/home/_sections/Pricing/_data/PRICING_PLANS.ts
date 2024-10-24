export const ORGANIZATION_PRICING_PLANS = [
    {
        name: "Starter Tier",
        price: 1999,
        anualPrice: 19999,
        saving: '2 months saving',
        isHighlighted: false,
        planFeatures: [
            { hasFeature: true, description: "50% discount in Opire fee (bounties created in organization by members)" },
        ],
    },
    {
        name: "Pro Tier",
        price: 3999,
        anualPrice: 39999,
        saving: '2 months saving',
        isHighlighted: true,
        planFeatures: [
            { hasFeature: true, description: "100% discount in Opire fee (bounties created in organization by members)" },
            { hasFeature: true, description: "50% discount in Opire fee (tips created in organization by members)" },
            { hasFeature: true, description: "Webhooks (coming soon)" },
        ],
    },
    {
        name: "Enterprise Tier",
        price: 19999,
        anualPrice: 199999,
        saving: '2 months saving',
        isHighlighted: false,
        planFeatures: [
            { hasFeature: true, description: "100% discount in Opire fee (bounties created in organization by anyone)" },
            { hasFeature: true, description: "100% discount in Opire fee (tips created in organization by anyone)" },
            { hasFeature: true, description: "Apply discounts to payments made by members outside the organization" },
            { hasFeature: true, description: "Webhooks (coming soon)" },
            { hasFeature: true, description: "Featured bounties (coming soon)" },
        ],
    },
]

export const INDIVIDUAL_PRICING_PLANS = [
    {
        name: "Individual Starter",
        price: 499,
        anualPrice: 4999,
        saving: '2 months saving',
        isHighlighted: false,
        planFeatures: [
            { hasFeature: true, description: "50% discount in Opire fee (bounties)" },
            { hasFeature: true, description: "50% discount in Opire fee (tips)" },
        ],
    },
    {
        name: "Individual Pro",
        price: 1499,
        anualPrice: 14999,
        saving: '2 months saving',
        isHighlighted: true,
        planFeatures: [
            { hasFeature: true, description: "100% discount in Opire fee (bounties)" },
            { hasFeature: true, description: "100% discount in Opire fee (tips)" },
            { hasFeature: true, description: "Webhooks (coming soon)" },
        ],
    },
]