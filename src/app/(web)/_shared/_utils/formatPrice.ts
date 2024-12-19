import { Price } from "../_types/Price";

export function formatPrice(price: Price): string {
    let value = price.value;

    if (price.unit === 'USD_CENT') {
        value = price.value / 100;
    }

    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
}