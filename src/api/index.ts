import axios from 'axios';
export const baseURL = 'https://azizbeksavkimov-server-efk.herokuapp.com';

export const API = axios.create({
  baseURL,
  responseType: 'json'
});

