import axios, { AxiosInstance } from 'axios';

const API: AxiosInstance = axios.create({
    baseURL: 'http://3.84.165.44:8080/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer your_token_here' // Insira o token de autorização adequado
    }
});

export default API;