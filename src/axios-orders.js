import axios from 'axios';

const instance = axios.create({
    baseURL: '' //database URL here!
});

export default instance;