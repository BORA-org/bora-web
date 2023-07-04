import axios, { AxiosResponse } from 'axios';

export const get = async <T>(url: string): Promise<T> => {
    const response: AxiosResponse<T> = await axios.get(url);
    return response.data;
};

export const post = async <T>(url: string, data: any): Promise<T> => {
    const response: AxiosResponse<T> = await axios.post(url, data);
    return response.data;
};