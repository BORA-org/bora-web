export const convertDateTime = (date: string, time: string): string => {
    const [day, month, year] = date.split('/');
    const [hour, minute] = time.split(':');
    const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    const formattedTime = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:00.000000`;
    return `${formattedDate}T${formattedTime}`;
}

export const convertToNumber = (value: string): number | null => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
        return null;
    }
    return parsedValue;
}