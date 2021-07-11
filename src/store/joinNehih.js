import axios from 'axios';

 const api = axios.create({
    // baseURL : "https://nehih.herokuapp.com/blog"
    baseURL : "http://localhost:5000/admin"
});

const accessJWT = sessionStorage.getItem("accessJWT");
export const getNehih = () => api.get('/applications',{
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT
    }
}).then(res => res.data);

export const getSingleApplications = (applicationId) => api.get('/single-applications',{
    params:{
        applicationId: applicationId
    },
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT
    }
}).then(res => res.data);