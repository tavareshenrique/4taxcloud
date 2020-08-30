import axios from 'axios';

const api = axios.create({
  baseURL: 'https://taxclouddb.herokuapp.com',
});

export default api;
