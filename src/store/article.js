import axios from 'axios';

 const api = axios.create({
    baseURL : "https://nehihbackend.herokuapp.com/blog"
    // baseURL : "http://localhost:5000/blog"
});

const accessJWT = sessionStorage.getItem("accessJWT");

export const getArticles = () => api.get('/').then(res => res.data);

export const getSingleArticles = (articleId) => api.get('/single',{
    params:{
        articleId: articleId
    }
}).then(res => res.data);

export const deleteSingleArticles = (articleId) => api.delete('/delete',{
    params:{
        articleId: articleId
    },
    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT
    }
}).then(res => res.data);

export const publishSingleArticles = (articleId) => api.get('/publish',{
    params:{
        articleId: articleId
    },

    headers : {
        "Content-Type": "multipart/form-data",
        "Authorization": accessJWT
    }
}).then(res => res.data);
export const createArticles = (article) => api.post('/create', article,{headers : {
    "Content-Type": "multipart/form-data",
    "Authorization": accessJWT
}}).then(res => res.data);
export const updateArticles = ({userId, ...updatedArticle}) => api.post('/update', updatedArticle,{
    params:{
    articleId: userId
},
headers : {
    "Content-Type": "multipart/form-data",
    "Authorization": accessJWT
}
}).then(res => res.data);

export const updateArticleImg = ({userId, updatedImage}) => api.post('/updateImage', updatedImage,{
    params:{
    articleId: userId
},
headers : {
    "Content-Type": "multipart/form-data",
    "Authorization": accessJWT
}
}).then(res => res.data);