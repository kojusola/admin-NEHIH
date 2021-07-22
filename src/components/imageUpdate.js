import React, {useState, useRef} from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { updateArticleImg} from '../store/article';

const EditArticle = ({article, setImageUpdate}) => {
    const inputRef = useRef(null);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [imageError, setImageError] = useState();
    const [submitFile, setSubmitFile] = useState('');
    const [file, setFile] = useState({files:''});
    const [disableButton, setDisableButton] = useState(false);
    const handleChange = (event) =>{
        setSubmitFile(event.target.files[0]);
        setFile(URL.createObjectURL(event.target.files[0]));
        }
    const onImageLoad = ({target:img}) =>{
    console.log( img.offsetHeight, img.offsetWidth);
    if (img.offsetWidth - img.offsetHeight >= 250){
        setImageError("Upload Images with equal width and height");
        setDisableButton(true)
    }
    }
    const queryClient = useQueryClient();
    const { register, handleSubmit } = useForm({
      mode: 'onChange'
    });
    const { mutate } = useMutation (updateArticleImg, {
      onSuccess: data => {
        console.log(data)
        setSuccess("Article Image successfully updated");
      },
      onError: () => {
        setError("Article Image update Failed");
      },
      onSettled: () => {
        queryClient.invalidateQueries('create');
      }
    });
    const onSubmit = (data) => {
        console.log(data)
        let formData = new FormData()
        formData.append("image", submitFile);
      const updatedArticle = {
        "userId":article._id,
        formData: formData
      };
      console.log(updatedArticle)
      mutate(updatedArticle);
    };
    
    return (
      <div className="fixed inset-0 overflow-y-auto w-full h-screen">
        <div className=" overflow-x-hidden min-h-screen overflow-y-auto flex justify-center items-center z-50 bg-black bg-opacity-70">
          <div className="relative overflow-y-auto h-auto  mx-auto w-10/12 sm:w-10/12 border border-transparent rounded-lg shadow-lg">
            <div className="p-6 pt-3 overflow-y-auto  bg-white rounded-lg shadow-xl">
            <button onClick={()=>setImageUpdate(false)} className="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4 xl:my-8 text-left mx-auto bg-white sm:my-0  text-gray-600 font-medium">
            <p className="text-green-400 font-sm">{success? success : ''}</p>
            <p className="text-red-400 font-sm">{error? error : ''}</p>
            {
            file.files === '' && (
              <div className="h-60 w-60 mx-auto w-full flex flex-col items-center">
                <img src={article?.faceImage.avatar} alt="Article" className="h-60 w-60"></img>
              </div>
            )
          }
          {
            file.files !== '' && (
              <div className="mx-auto w-full flex flex-col items-center">
                <div >
                    <img onLoad={onImageLoad}  src={file} alt="Article"></img>
                </div>
                <p className="text-red">{imageError}</p>
              </div>
            )
          }
            <div className="mx-auto ">
            <button onClick={() => inputRef.current.click()} type="button" className="border pb-0 pt-4 border-gray-400 hover:text-white hover:bg-lilac-light hover:border-transparent focus:outline-none text-lilac-light bg-white w-36 py-2 mx-auto rounded-md">Choose image
            <input
            type="file"
            id="file"
            className="invisible h-px"
            {...register("faceImage",{required: true })}
            name="faceImage"
            onChange={handleChange}
            ref={inputRef}
            >
            </input>
            </button>
            </div>
            <div className="text-center mt-1 mb-2">
              <button
                className = "align-center w-6/12 mb-2  p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black disabled:opacity-50"
              type="submit"
              disabled={disableButton}
            >
              Update Image
            </button>
              </div>
          </form>
        </div>
        </div>
        </div>
      </div>
    );
}
 
export default EditArticle;