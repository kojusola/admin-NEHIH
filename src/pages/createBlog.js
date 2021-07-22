import React,{useState, useRef} from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { createArticles } from '../store/article';
import Sidebar from '../components/sidebar';
import ColoredLogo from '../assets/colored-logo.png';
import Loader from '../components/loader';

const schema = yup.object().shape({
  articleName: yup.string().min(6).required(),
  category: yup.string().min(2).required(),
  articleContent: yup.string().min(6).required(),
});
const CreateArticleForm = () => {
  const inputRef = useRef(null);
  const [pageBar, setPageBar] = useState('create');
  const [disableButton, setDisableButton] = useState(false);
  const [imageError, setImageError] = useState();
  const [file, setFile] = useState('');
  const [submitFile, setSubmitFile] = useState('');
  const queryClient = useQueryClient();
  const { register, handleSubmit ,formState: { errors }, reset} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const handleChange = (event) =>{
    setSubmitFile(event.target.files[0]);
    console.log(event.target.files[0]);
    // console.log(event.target.value);
    setFile(URL.createObjectURL(event.target.files[0]));
  }
  const onImageLoad = ({target:img}) =>{
    console.log( img.offsetHeight, img.offsetWidth);
    if (img.offsetHeight - img.offsetWidth >= 200){
        setImageError("Upload Images with equal width and height");
        setDisableButton(true)
    }
  }
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
    console.log(data);
    let formData = new FormData();
    formData.append("image", submitFile);
    formData.append("category", data.category);
    formData.append("articleName", data.articleName);
    formData.append("articleContent", data.articleContent);
    formData.append("articleEditDate", new Date());
    formData.append("articlePublishDate", new Date());
    console.log(formData)
    mutate(formData);
    e.target.reset();
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
        <form onSubmit={handleSubmit(onSubmit)} className="w-9/12 mx-auto text-left my-10">
          <div >
          <div className=" my-2  mx-auto text-center">
          {
            file === '' && (
              <svg className="mx-auto " xmlns="http://www.w3.org/2000/svg" width="487" height="294">
          <defs>
            <filter id="a" x="0" y="0" width="487" height="294" filterUnits="userSpaceOnUse">
              <feOffset dx="-6" dy="7"/>
              <feGaussianBlur stdDeviation="9" result="b"/>
              <feFlood flood-opacity=".5"/>
              <feComposite operator="in" in2="b"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="c" x="123.27" y="73.06" width="252.46" height="140.89" filterUnits="userSpaceOnUse">
              <feOffset dy="3"/>
              <feGaussianBlur stdDeviation="3" result="d"/>
              <feFlood flood-opacity=".16"/>
              <feComposite operator="in" in2="d"/>
              <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="e" x="123.27" y="73.06" width="252.46" height="140.89" filterUnits="userSpaceOnUse">
              <feOffset dy="3"/>
              <feGaussianBlur stdDeviation="3" result="f"/>
              <feFlood flood-opacity=".16"/>
              <feComposite operator="in" in2="f"/>
              <feComposite in="SourceGraphic"/>
            </filter>
          </defs>
          <g filter="url(#a)">
            <g transform="translate(33 20)" fill="#fff" stroke="#476FB1" stroke-dasharray="8">
              <rect width="433" height="240" rx="12" stroke="none"/>
              <rect x=".5" y=".5" width="432" height="239" rx="11.5" fill="none"/>
            </g>
          </g>
          <g filter="url(#c)">
            <path className="b" d="M132.5 79.5l234 122" style={{
              fill:"none",
              stroke: "#707070",
              opacity: "0.29"
            }}/>
          </g>
          <g filter="url(#e)">
            <path className="b" d="M366.5 79.5l-234 122" style={{
              fill:"none",
              stroke: "#707070",
              opacity: "0.29"
            }}/>
          </g>
          <g transform="translate(235 128)">
            <path className="c"style={{
              fill:"#476FB1"
            }} d="M28.5 3.75a3.12 3.12 0 00-2.33-1.02h-4.65v-.05a2.66 2.66 0 00-.76-1.9A2.52 2.52 0 0018.94 0h-8.4a2.53 2.53 0 00-1.85.79 2.71 2.71 0 00-.76 1.89v.05H3.31A3.12 3.12 0 00.98 3.75 3.52 3.52 0 000 6.16v14.48a3.35 3.35 0 00.98 2.42 3.27 3.27 0 002.33 1.01h22.86a3.12 3.12 0 002.33-1.01 3.52 3.52 0 00.98-2.42V6.16a3.35 3.35 0 00-.98-2.4zm-.48 16.9H28a1.9 1.9 0 01-.54 1.33 1.77 1.77 0 01-1.28.55H3.3a1.77 1.77 0 01-1.3-.55 1.9 1.9 0 01-.52-1.34V6.16a1.9 1.9 0 01.53-1.33 1.77 1.77 0 011.29-.55h5.4a.77.77 0 00.76-.79v-.84a1.17 1.17 0 01.31-.81 1.08 1.08 0 01.79-.32h8.37a1.08 1.08 0 01.79.32 1.17 1.17 0 01.3.8v.85a.77.77 0 00.76.79h5.41a1.77 1.77 0 011.29.55 1.9 1.9 0 01.53 1.34z"/>
            <path className="c" style={{
              fill:"#476FB1"
            }} d="M14.74 6.25a6.78 6.78 0 00-4.87 2.1 7.35 7.35 0 000 10.11 6.72 6.72 0 009.75 0 7.35 7.35 0 000-10.12 6.78 6.78 0 00-4.88-2.09zm3.81 11.14a5.27 5.27 0 01-7.62 0 5.67 5.67 0 01-1.57-3.96 5.8 5.8 0 011.57-3.95 5.26 5.26 0 013.81-1.63 5.38 5.38 0 013.81 1.63 5.67 5.67 0 011.57 3.95 5.54 5.54 0 01-1.57 3.96z"/>
            <ellipse className="c" style={{
              fill:"#476FB1"
            }} cx="1.37" cy="1.43" rx="1.37" ry="1.43" transform="translate(23.34 6.22)"/>
          </g>
        </svg>
            )
          }
          {
            file !== '' && (
              <div className="mx-auto w-full flex flex-col items-center">
                <img onLoad={onImageLoad} src={file} alt="Article"></img>
                <p className="text-red">{imageError}</p>
              </div>
            )
          }
          <div className="mx-auto ">
          <button onClick={() => inputRef.current.click()} type="button" className="border border-gray-400 hover:text-white hover:bg-lilac-light hover:border-transparent focus:outline-none text-lilac-light bg-white w-36 pt-4 mx-auto pb-0 rounded-md">Choose image
          <input
          type="file"
          id="file"
          className="invisible h-0 p-0 m-0"
          {...register("faceImage")}
          name="faceImage"
          onChange={handleChange}
          ref={inputRef}
          >
          </input>
          </button>
          </div>
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
              disabled={disableButton}
            className = "align-center w-6/12 mb-2  p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black disabled:opacity-50"
              type="submit"
            >
              Create Article
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