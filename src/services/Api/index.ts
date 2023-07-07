import axios, { AxiosInstance } from 'axios';

const API: AxiosInstance = axios.create({
    baseURL: 'http://3.139.60.209/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer your_token_here' // Insira o token de autorização adequado
    }
});

export default API;