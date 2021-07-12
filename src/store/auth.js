import axios from 'axios';

 const api = axios.create({
    // baseURL : "https://nehih.herokuapp.com/blog"
    baseURL : "http://localhost:5000/admin"
});


const accessJWT = sessionStorage.getItem("accessJWT");
export const getAdmin = () => api.get('/admin-users',{
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT
    }
}).then(res => res.data);

export const deleteSingleAdmin = (adminId) => api.delete('/delete-admin-users',{
    params:{
        adminId: adminId
    },
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT
    }
}).then(res => res.data);

export const authorizingAdmin = (adminId) => api.get('/authorize-admin-users',{
    params:{
        adminId: adminId
    },
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT
    }
}).then(res => res.data);
export const unauthorizeAdmin = (adminId) => api.get('/unauthorize-admin-users',{
    params:{
        adminId: adminId
    },
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT
    }
}).then(res => res.data);
export const createAdmin = (admin) => api.post('/register', admin).then(res => res.data);
export const loginAdmin = (admin) => api.post('/login', admin).then(res => res.data);