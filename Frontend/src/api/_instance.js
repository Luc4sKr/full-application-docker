import axios from 'axios';

/* eslint-disable no-undef */
const apiUrl = process.env.URL_BACKEND;
/* eslint-enable no-undef */

export const instance = axios.create({
    baseURL: `${apiUrl}/api`,
    timeout: 5000
});