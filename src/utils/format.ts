export const formatCurrency = (
    value: number,
    currency: 'VND' | 'USD' | string,
    locale: string = 'vi-VN'
): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(value);
};


