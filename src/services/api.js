import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://shrouded-shelf-01513.herokuapp.com',
});
