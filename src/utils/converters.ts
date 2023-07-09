export const convertDateTime = (date: string, time: string): string => {
    return `${date} ${time}`;
}

export const convertToNumber = (value: string): number | null => {
    const parsedValue = parseFloat(value.replace('R$', '').replace(',', '.'));
    if (isNaN(parsedValue)) {
        return null;
    }
    return parsedValue;
}