import axios, { AxiosInstance } from 'axios';

const Nominatim: AxiosInstance = axios.create({
    baseURL: 'https://nominatim.openstreetmap.org/',
});

export default Nominatim;