import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/',
});

export { apiClient };
