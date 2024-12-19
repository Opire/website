import { Price } from "@/app/(web)/_shared/_types/Price";

interface PRICING_PLAN_TYPE {
    price: Price,
    anualPrice: Price,
    saving: '2 months saving',
    isHighlighted: boolean,
    planFeatures: {
        hasFeature: boolean,
        description: string,
    }[],
}

interface ORGANIZATION_PRICING_PLAN_TYPE extends PRICING_PLAN_TYPE {
    name: "Starter Tier" | "Pro Tier" | "Enterprise Tier",
}

interface INDIVIDUAL_PRICING_PLAN_TYPE extends PRICING_PLAN_TYPE {
    name: "Individual Starter" | "Individual Pro",
}

export const ORGANIZATION_PRICING_PLANS: ORGANIZATION_PRICING_PLAN_TYPE[] = [
    {
        name: "Starter Tier",
        price: {
            value: 1999,
            unit: 'USD_CENT'
        },
        anualPrice: {
            value: 19999,
            unit: 'USD_CENT'
        },
        saving: '2 months saving',
        isHighlighted: false,
        planFeatures: [
            { hasFeature: true, description: "50% discount in Opire fee (bounties created in organization by members)" },
        ],
    },
    {
        name: "Pro Tier",
        price: {
            value: 3999,
            unit: 'USD_CENT'
        },
        anualPrice: {
            value: 39999,
            unit: 'USD_CENT'
        },
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
        price: {
            value: 19999,
            unit: 'USD_CENT'
        },
        anualPrice: {
            value: 199999,
            unit: 'USD_CENT'
        },
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

export const INDIVIDUAL_PRICING_PLANS: INDIVIDUAL_PRICING_PLAN_TYPE[] = [
    {
        name: "Individual Starter",
        price: {
            value: 499,
            unit: 'USD_CENT'
        },
        anualPrice: {
            value: 4999,
            unit: 'USD_CENT'
        },
        saving: '2 months saving',
        isHighlighted: false,
        planFeatures: [
            { hasFeature: true, description: "50% discount in Opire fee (bounties)" },
            { hasFeature: true, description: "50% discount in Opire fee (tips)" },
        ],
    },
    {
        name: "Individual Pro",
        price: {
            value: 1499,
            unit: 'USD_CENT'
        },
        anualPrice: {
            value: 14999,
            unit: 'USD_CENT'
        },
        saving: '2 months saving',
        isHighlighted: true,
        planFeatures: [
            { hasFeature: true, description: "100% discount in Opire fee (bounties)" },
            { hasFeature: true, description: "100% discount in Opire fee (tips)" },
            { hasFeature: true, description: "Webhooks (coming soon)" },
        ],
    },
]