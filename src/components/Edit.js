import React, {useState, useEffect} from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { updateArticles } from '../store/article';
import * as api from '../store/article.js';
import {
    useQuery
  } from 'react-query';
import Loader from './loader';
import UpdateImage from './imageUpdate';

const EditArticle = ({articleId, toggle}) => {
    const [error, setError] = useState('')
    const [imageUpdate, setImageUpdate] = useState(false)
    const [success, setSuccess] = useState('')
    const {data, isLoading} = useQuery(['data', articleId],()=> api.getSingleArticles(articleId), {
        enabled: Boolean(articleId)
    });
    const [fields, setFields] = useState({category:'',articleName:'', articleContent: ''});
    const articles = data? data.data.article: null;
    useEffect(() => {
       const article = data? data.data.article: null;
       setFields({...article});
    }, [data])
    
    const queryClient = useQueryClient();
    const { register, handleSubmit } = useForm({
      mode: 'onChange'
    });
    const { mutate } = useMutation (updateArticles, {
      onSuccess: data => {
        console.log(data)
        setSuccess("article successfully updated")
      },
      onError: () => {
        setError("article update Failed")
      },
      onSettled: () => {
        queryClient.invalidateQueries('create');
      }
    });
    const onSubmit = (data) => {
      const updatedArticle = {
        "userId":articleId,
        ...data
      };
      console.log(updatedArticle)
      mutate(updatedArticle);
    };
    const handleChange =(event)=>{
        const {name, value} = event.target;
        setFields({fields, [name]: value})
    }
    
    // if(data){ setFields(data.data.article)}
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
    return (
      <div className="fixed inset-0 overflow-y-auto w-full h-screen">
        <div className=" overflow-x-hidden min-h-screen  overflow-y-auto flex justify-center items-center z-50 bg-black bg-opacity-70">
          <div className="relative  mx-auto w-10/12 sm:w-10/12 border border-transparent rounded-lg shadow-lg">
            <div className="p-6 pt-3 overflow-y-auto bg-white rounded-lg shadow-xl">
            <button onClick={()=>toggle(false)} className="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4 xl:my-8 text-left mx-auto bg-white sm:my-0  text-gray-600 font-medium">
            <p className="text-green-400 font-sm">{success? success : ''}</p>
            <p className="text-red-400 font-sm">{error? error : ''}</p>
            <div className="text-center mt-1 mb-2">
              <button
              onClick={()=>setImageUpdate(true)}
              className = "align-center w-3/12 mb-1  p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black"
                type="button"
              >
              Update Image
              </button>
              </div>
            <div>
            <div>
            <label className="font-semibold text-gray-400 text-left">Category</label>
            <input
            className ="border border-gray-500 mb-3 mt-1 h-8 w-full rounded"
            value = {fields? fields.category: null}
            {...register("category",{ required: true })}
            name="category"
            onChange={handleChange}
            placeholder="Category"
            ></input>
            </div>
            <div>
            <label className="font-semibold text-gray-400 text-left">Article Name</label>
            <input
            className ="border border-gray-500 mb-3 mt-1 h-8 w-full rounded"
            value ={fields?fields.articleName:  null}
            name="articleName"
            onChange={handleChange}
            {...register("articleName", { required: "Required", })}
            placeholder="Article Name"
            ></input>
            </div>
            <div>
            <label className="font-semibold text-gray-400">Content</label>
            <textarea
            {...register("articleContent", { required: "Required", })}
            value = {fields? fields.articleContent: null}
            onChange={handleChange}
            name="articleContent"
            placeholder="Article content"
            className = "border border-gray-500 mb-3 w-full mt-1 h-60 rounded"
            ></textarea>
            </div>
            </div>
            <div className="text-center mt-1 mb-2">
              <button
            className = "align-center w-6/12 mb-2  p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black"
              type="submit"
            >
              Update Article
            </button>
              </div>
          </form>
        </div>
        </div>
        </div>
        {
          imageUpdate === true &&(
            <UpdateImage
              setImageUpdate={setImageUpdate}
              article={articles}
            />
          )
        }
      </div>
    );
}
 
export default EditArticle;