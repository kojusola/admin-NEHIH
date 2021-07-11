import axios from 'axios';

 const api = axios.create({
    // baseURL : "https://nehih.herokuapp.com/blog"
    baseURL : "http://localhost:5000/admin"
});
const accessJWT = sessionStorage.getItem("accessJWT");
export const getNewsletter = () => api.get('/newsletters',{
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT
    }
}).then(res => res.data);