import axios, { AxiosInstance } from 'axios';
import { getToken } from './auth';

const API: AxiosInstance = axios.create({
    baseURL: 'http://3.84.165.44:8080/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
    }
});

export default API;