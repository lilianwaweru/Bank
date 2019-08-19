import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class Service{

    constructor(){}


    getCustomers() {
        const url = `${API_URL}/api/history/`;
        return axios.get(url).then(response => response.data);
    }  
}