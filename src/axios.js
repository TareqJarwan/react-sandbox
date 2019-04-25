import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-edupan-38ad5.cloudfunctions.net/api/'
});

export default instance;