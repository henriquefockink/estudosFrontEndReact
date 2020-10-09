//importa o Axios
import axios from 'axios';

//Define a URL base para integração com o backend
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

//Exporta a API
export default api;