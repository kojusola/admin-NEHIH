import axios from 'axios';
import accessJWT from './token'
 const api = axios.create({
    baseURL : "https://nehihbackend.herokuapp.com/admin"
    // baseURL : "http://localhost:5000/admin"
});

export const getNehih = () => api.get('/applications',{
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT()
    }
}).then(res => res.data);

export const getSingleApplications = (applicationId) => api.get('/single-applications',{
    params:{
        applicationId: applicationId
    },
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT()
    }
}).then(res => res.data);