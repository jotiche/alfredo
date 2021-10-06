import axios from "axios";

const instance = axios.create({
    baseURL: 'http://3.12.41.228:8080/tesis/api/',
    
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});

instance.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);

export default instance;