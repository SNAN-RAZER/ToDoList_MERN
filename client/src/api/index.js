import axios from 'axios';

const taskAxiosInstance = axios.create({
    baseURL:"http://localhost:6002/api/v1/tasks/"
});

export default taskAxiosInstance;

