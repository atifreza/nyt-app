import axios from 'axios';
import { getAuthToken } from '../utils/CommonUtils';

let REQUEST_COUNT = 0;
const axiosInstance = axios.create({
    headers: {'Content-Type': 'text/xml'},
});

//Request Handler
axiosInstance.interceptors.request.use((config) => {
    REQUEST_COUNT++;
    // code to add bearer token on all api calls
    let token = getAuthToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error)
});

//Response Handler
axiosInstance.interceptors.response.use((response) => {
    REQUEST_COUNT--;
    return response;
}, (error) => {
    REQUEST_COUNT = REQUEST_COUNT - 1;
    return Promise.reject(error)
});

//export module axios
export default axiosInstance;