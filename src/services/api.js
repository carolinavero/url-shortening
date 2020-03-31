import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rel.ink/api/',
})

export default api;