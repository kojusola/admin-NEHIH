import axios from 'axios';

 const api = axios.create({
    baseURL : "https://nehihbackend.herokuapp.com/blog"
    // baseURL : "http://localhost:5000/blog"
});

const accessJWT = () =>{
    const auth = sessionStorage.getItem("accessJWT");
    return auth
};

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
        "Authorization": accessJWT()
    }
}).then(res => res.data);
export const createArticles = (article) => api.post('/create', article,{headers : {
    "Content-Type": "multipart/form-data",
    "Authorization": accessJWT()
}}).then(res => res.data);

export const updateArticles = ( updatedArticle) => api.post('/update', {
    articleName: updatedArticle.articleName,
    articleContent: updatedArticle.articleContent,
    category: updatedArticle.category,
},{
    params:{
    articleId: updatedArticle.userId
},
headers : {
    "Authorization": accessJWT()
}
}).then(res => res.data);

export const updateArticleImg = (updatedArticle) => api.post('/updateImage',updatedArticle.formData,{
    params:{
    articleId: updatedArticle.userId
},
headers : {
    "Content-Type": "multipart/form-data",
    "Authorization": accessJWT()
}
}).then(res => res.data);