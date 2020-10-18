import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:4000/api/curriculo',
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

export default api;