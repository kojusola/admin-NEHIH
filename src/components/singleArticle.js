import React from 'react';
import {
    useQuery
  } from 'react-query';
import * as api from '../store/article.js';
import Loader from './loader';

const SingleArticle = ({articleId, toggle}) => {
  const {data, isLoading} = useQuery(['data', articleId],()=> api.getSingleArticles(articleId), {
      enabled: Boolean(articleId)
  });
    const dataSingle = data?.data.article
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
    }
    // const { mutate } = useMutation (createArticles, {
    //   onSuccess: data => {
    //     console.log(data);
    //     const message = "success"
    //     alert(message);
    //   },
    //   onError: () => {
    //     alert("there was an error")
    //   }
    // });
    // mutate({
    //   "articleId": articleId
    // })
    return ( 
        // <div>{published}</div>
        <div>
        {/* {singleArticle?.data.articles.map(article=> 
        )} */}
            <div>
            <div className="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                <div className="relative mx-auto w-10/12 sm:w-11/12 border border-transparent rounded-lg shadow-lg">
                  <div className="p-6 pt-3 bg-white rounded-lg shadow-xl">
                    <button onClick={()=>toggle(false)} className="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div  className="mb-4 xl:my-8 text-center items-center mx-auto bg-white sm:my-0  text-gray-600 font-medium">
                    
                        <div>
                          <img src={dataSingle?.faceImage.avatar} alt="Article" className="w-30 h-20 mx-auto "></img>
                          <p className=" text-gray-900 text-xs tracking-normal"><span className="text-gray-400 text-lg font-semibold">Article Name:</span>{dataSingle?.articleName} </p>
                          <p className=" text-gray-900 text-xs tracking-normal"><span className="text-gray-400 text-lg font-semibold">Article Category:</span> {dataSingle?.category}</p>
                          <div className=" overflow-y-auto h-60 px-3 mt-3 text-gray-900 text-xs tracking-normal">{dataSingle?.articleContent}</div>
                        </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
     );
}
 
export default SingleArticle;