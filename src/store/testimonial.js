import axios from 'axios';
import accessJWT from './token'

 const api = axios.create({
        baseURL : "https://nehihbackend.herokuapp.com/admin"
    // baseURL : "http://localhost:5000/admin"
});

export const deleteTestimonial = (testimonialId) => api.get('/delete-testimonial',
{
    params:{
        applicationId: testimonialId
    },
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT()
    }
}).then(res => res.data);
export const getAllTestimonial = () => api.get('/testimonials/all').then(res => res.data);

export const createTestimonial = (testimonial) => api.post('/create-testimonial', testimonial,{
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT()
    }
}).then(res => res.data);