import React,{useState} from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { createArticles } from '../store/article';
import Sidebar from '../components/sidebar';
import ColoredLogo from '../assets/colored-logo.png';
import Loader from '../components/loader';

// interface Article {
//   name: string;
//   job: string;
//   id: string;
// };

const schema = yup.object().shape({
  articleName: yup.string().min(6).required(),
  category: yup.string().min(2).required(),
  articleContent: yup.string().min(6).required(),
});
const CreateArticleForm = () => {
//   const { open, handleClose } = props;
const [pageBar, setPageBar] = useState('create');
  const queryClient = useQueryClient();
  const { register, handleSubmit ,formState: { errors }, reset} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const { mutate, isLoading } = useMutation (createArticles, {
    onSuccess: data => {
      console.log(data);
      // const message = "success"
      // alert(message);
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  });
  const onSubmit = (data,e) => {
    // const article = {
    //   ...data
    // };
    let formData = new FormData()
    formData.append("image", data.faceImage[0]);
    formData.append("category", data.category);
    formData.append("articleName", data.articleName);
    formData.append("articleContent", data.articleContent);
    formData.append("articleEditDate", new Date());
    formData.append("articlePublishDate", new Date());
    console.log(formData)
    mutate(formData);
    // e.target.reset();
    reset();
  };

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
    <div className="flex h-screen flex-col">
        <div className="flex-shrink-0">
        <div className="w-full flex justify-between bg-gray-800 py-4 text-white font-semibold text-lg">
        <img src={ColoredLogo} className="w-20 h-8 ml-5" alt="Logo"></img> 
        <div className="w-10/12 mx-auto">
            <p className="text-center">Create Articles</p>
        </div>
        </div>
        </div>
        <div className=" flex-1 flex overflow-hidden">
        <Sidebar
            pageBar={pageBar}
            setPageBar={setPageBar}
        />
        <div className="flex-1 overflow-y-auto"> 
        <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 mx-auto text-left">
          <div >
          <div className="border border-dashed border-lilac-light p-5 pb-1 my-2  mx-auto text-center">

          <label for="file" className="font-semibold text-lilac-light">Choose an image for your article. Ensure image of almost  equal dimensions is uploaded.</label>
          <input
          type="file"
          id="file"
          className="invisible"
          {...register("faceImage",{required: true })}
          name="faceImage"
          ></input>
          </div>
          <div>
          <label className="font-semibold text-gray-400 text-left" style={{
            textAlign:"left"
          }}>Article Topic</label>
          <div>
          <input
          className = "border border-gray-500 mb-3 w-full mt-1 h-8 rounded"
          {...register("articleName")}
          name="articleName"
          ></input>
          <p className="text-red-400 font-sm">{errors.articleName?.message}</p>
          </div>
          </div>
          <div className="">
          <label className="font-semibold text-gray-400 text-left">Category</label>
          <div>
          <input
          className ="border border-gray-500 mb-3 mt-1 h-8 w-full rounded"
          {...register("category")}
          name="category"
          ></input>
          <p className="text-red-400 font-sm">{errors.category?.message}</p>
          </div>
          </div>
          <div>
          <label className="font-semibold text-gray-400">Content</label>
          <div>
              <textarea
              className = "border border-gray-500 mb-3 w-full mt-1 h-96 rounded"
              {...register("articleContent")}
              name="articleContent"
              ></textarea>
              <p className="text-red-400 font-sm">{errors.articleContent?.message}</p>
          </div>
          </div>
          </div>
            <div className="text-center mt-1 mb-2">
              <button
            className = "align-center w-6/12 mb-2  p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black"
              type="submit"
            >
              Create
            </button>
              </div>
        </form>
        </div>
        
        </div>
    </div>
  );
};

// createArticleForm.propTypes = {
//   handleClose: PropTypes.func,
//   open: PropTypes.bool
// };
// }
export default CreateArticleForm;