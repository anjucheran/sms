import axios from 'axios';

const baseURL = "http://ndb.devops.arimac.xyz/api/ndb"
const Authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE1MzY4MjQzODIsImV4cCI6MTU2ODM2MDM4MiwidWQiOiJsYWtpdGhtdXRodWdhbGEiLCJ0eXBlIjoiQUNDRVNTIn0.O2GdmZZRvNKF92M-RkEsL373jPVSplTemAeEiVS5qY4"

export default axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': Authorization
    }
});