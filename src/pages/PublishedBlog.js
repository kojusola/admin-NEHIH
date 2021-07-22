import React, {useState} from 'react';
import {
    useQuery
  } from 'react-query';
import * as api from '../store/article.js';
import Sidebar from '../components/sidebar'
import SingleArticle from '../components/singleArticle';
import Loader from '../components/loader';
import ColoredLogo from '../assets/colored-logo.png';

const PublishedBlog = () => {
    const [pageBar, setPageBar] = useState('home');
    const [refetchInterval, setRefetchInterval] = useState(2000);
    const [toggle, setToggle] = useState(false)
    const [articleId, setArticleId] = useState()
    const [publishId, setPublishId] = useState();
    const [disable, setDisable] =useState([]);
    const { data, isLoading, onSuccess} =useQuery('articles', api.getArticles, {
        refetchInterval: refetchInterval
    });
    const publishedArticle = useQuery(['publishedArticle', publishId],()=> api.publishSingleArticles(publishId), {
        enabled: Boolean(publishId)
    });
    if(isLoading){
        return (
            <div>
            <div className="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
           <div className="relative mx-auto">
           <Loader/>
           </div>
           </div>
       </div>
        )
    };
    if(onSuccess){
        return setRefetchInterval(2000);
    }
    if(publishedArticle.onSuccess){
        return setRefetchInterval(2000);
    }
    // if(isFetching){
    //     return  setRefetchInterval(2000)
    // };
    // console.log(data.data.articles);
    const published = data?.data.articles.filter((article)=>{
       return article.verified === true
    })
    console.log(published);
    return ( 
        <div>
            {/* // <div>
        // {data?.data.articles?.map(article=> 
        //     <div key={article._id}>
        //         <li >{article._id}</li>
        //         <button onClick={()=>setArticleId(article._id)} >view</button>
                <button onClick={()=>setPublishId(article._id)} >publish/unpublish</button>
            </div>
         )}
        </div> */}
        <div className="flex h-screen flex-col">
        <div className="flex-shrink-0">
        <div className="w-full flex justify-between bg-gray-800 py-4 text-white font-semibold text-lg">
        <img src={ColoredLogo} className="w-20 h-8 ml-5" alt="Logo"></img> 
        <div className="w-10/12 mx-auto">
            <p className="text-center">Published Articles</p>
        </div>
        </div>
        </div>
        <div className=" pb-4 flex-1 flex overflow-hidden">
        <Sidebar
            pageBar={pageBar}
            setPageBar={setPageBar}
        />
        <div className="flex-1  overflow-y-auto"> 
        <div className="w-10/12 pt-6 mx-auto">
                <div className="w-full p- flex border-b border-gray-300">
                    <div className="w-10/12 flex ">
                    <p className="w-2/12 text-gray-500 tracking-wider">S/N</p>
                    <p className="w-4/12 text-gray-500 tracking-wider">Article Category</p>
                    <p className="w-6/12  text-gray-500 tracking-wider">Article Name</p>
                    </div>
                   
                </div>
                {published.map(article=>
                    <div className="w-full py-2 flex border-b border-gray-300">
                        <button key={article._id} onClick={()=>{setToggle(true); setArticleId(article._id)}} className="w-10/12">
                        <div className="w-full flex">
                        <p className="w-2/12 text-gray-900 text-xs tracking-normal">{published.indexOf(article) +1}</p>
                        <p className="w-3/12 mx-auto text-gray-900 text-xs tracking-normal"> {article.category}</p>
                        <p className="w-7/12 text-gray-900 text-xs tracking-normal">{article.articleName}</p>
                        </div>
                        
                        </button>
                        <button disabled={disable.indexOf(article._id) !== -1} onClick={()=>{setPublishId(article._id); setDisable([...disable, article._id])}} className="w-2/12 p-1 text-xs bg-lilac-logo border rounded-sm border-transparent hover:border-black hover:bg-white text-white hover:text-black disabled:opacity-50 ">Unpublish</button>
                    </div>
                )}
            </div>
        </div>
        { toggle === true && (
            <div>
                <SingleArticle
                    articleId={articleId}
                    toggle={setToggle}
                />
            </div>
        )}
        </div>
    </div>
        </div>

     );
}
 
export default PublishedBlog;