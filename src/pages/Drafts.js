import React, {useState} from 'react';
import {
    useQuery
  } from 'react-query';
import * as api from '../store/article.js';
import Edit from '../components/Edit';
import Sidebar from '../components/sidebar'
import SingleArticle from '../components/singleArticle';
import ColoredLogo from '../assets/colored-logo.png';


const Drafts = () => {
    const [pageBar, setPageBar] = useState('drafts');
    const [toggle, setToggle] = useState(false);
    const [editToggle, setEditToggle] = useState(false);
    const [articleId, setArticleId] = useState()
    const [publishId, setPublishId] = useState()
    const [editId, setEditId] = useState()
    const { data} =useQuery('articles', api.getArticles);
    const {singleArticle} = useQuery(['singleArticle', articleId],()=> api.getSingleArticles(articleId), {
        enabled: Boolean(articleId)
    });
    const {publishedArticle} = useQuery(['publishedArticle', publishId],()=> api.publishSingleArticles(publishId), {
        enabled: Boolean(publishId)
    });
    console.log(publishedArticle)
    // const giveSingleArticle = (article) =>{
    //     setArticle({article})
    // }

    const unpublished = data?.data.articles.filter((article)=>{
        return article.verified = false
     })
    // console.log(data.data.articles);
    // const published = data.map((each)=> 
    // <div key={data.data.articles._id}>data.data.articles._id</div>)
    return ( 
        // <div>{published}</div>
        <div>
        {/* {data.data.articles?.map(article=> 
            <div key={article._id}>
                <li >{article._id}</li>
                <button onClick={()=>setArticleId(article._id)} >view</button>
                <button onClick={()=>setPublishId(article._id)} >publish/unpublish</button>
                <button onClick={()=>setEditId(article._id)} >Edit</button>
                <Edit articleId={editId}/>
            </div>
        )} */}

            <div className="flex h-screen flex-col">
            <div className="flex-shrink-0">
            <div className="w-full flex justify-between bg-gray-800 py-4 text-white font-semibold text-lg">
            <img src={ColoredLogo} className="w-20 h-8 ml-5" alt="Logo"></img> 
            <div className="w-10/12 mx-auto">
                <p className="text-center">Article Drafts</p>
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
                            <div className="w-6/12 flex pr-16">
                            <p className="w-4/12 pr-10 text-gray-500 tracking-wider">S/N</p>
                            <p className="w-8/12 text-gray-500 tracking-wider">Article Category</p>
                            </div>
                            <p className="w-4/12 px-3 text-gray-500 tracking-wider">Article Name</p>
                        </div>
                    <div  className="">
                    {unpublished?.map(article=>
                    <div className="w-full py-2 flex border-b border-gray-300">
                        <button key={article._id} onClick={()=>{setToggle(true); setArticleId(article._id)}} className="w-10/12 flex">
                        <div className="w-7/12 flex pr-24">
                        <p className="w-3/12 pr-16 text-gray-900 text-xs tracking-normal">{unpublished.indexOf(article) +1}</p>
                        <p className="w-9/12 text-gray-900 text-xs tracking-normal"> {article.category}</p>
                        </div>
                        <p className="w-5/12 px-3 text-gray-900 text-xs tracking-normal">{article.articleName}</p>
                        </button>
                        <button onClick={()=>{setEditToggle(true);setEditId(article._id)}} className="w-1/12 p-1 mr-2 text-xs hover:bg-lilac-logo border rounded-sm hover:border-transparent border-black bg-white hover:text-white text-black ">Edit</button>
                        <button onClick={()=>setPublishId(article._id)} className="w-1/12 p-1 text-xs bg-lilac-logo border rounded-sm border-transparent hover:border-black hover:bg-white text-white hover:text-black ">Publish</button>
                    </div>
                    )}
                    </div>
                </div>
            </div>
            { toggle === true && (
                <div>
                    <SingleArticle
                        articleId={articleId}
                        toggle={setToggle}
                        singleArticle= {singleArticle}
                    />
                </div>
            )}
            { editToggle === true && (
                <div className="overflow-y-auto">
                    <Edit
                        articleId={editId}
                        toggle={setEditToggle}
                        singleArticle= {singleArticle}
                    />
                </div>
            )}
            </div>
        </div>
        </div>
     );
}
 
export default Drafts;