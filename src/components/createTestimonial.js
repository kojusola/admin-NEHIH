import React, {useState} from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { createTestimonial } from '../store/testimonial.js';

// interface Article {
//   name: string;
//   job: string;
//   id: string;
// };

const schema = yup.object().shape({
  fullname: yup.string().min(6).required(),
  testimonial: yup.string().min(6).required(),
});
const CreateTestimonialForm = ({ toggle}) => {
const [file, setFile] = useState('');
const [error, setError] =useState()
const [success, setSuccess] =useState();
const handleChange = (event) =>{
  setFile(URL.createObjectURL(event.target.files[0]));
}
  const queryClient = useQueryClient();
  const { register, handleSubmit ,formState: { errors }, reset} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const { mutate} = useMutation (createTestimonial, {
    onSuccess: data => {
      console.log(data);
      setSuccess("Testimonial Created")
      // const message = "success"
      // alert(message);
    },
    onError: (error) => {
      setError("Testmonial creation failed")
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
    formData.append("fullname", data.fullname);
    formData.append("testimonial", data.testimonial);
    console.log(formData)
    mutate(formData);
    // e.target.reset();
    reset();
  };

  return (
    <div className="">
      <div className=" h-auto  mx-auto w-10/12 sm:w-11/12">
        <div className="relative p-3 pt-3 overflow-y-auto ">
        <button onClick={()=>toggle(false)} className="absolute top-0 left-0 hover:text-lilac-light focus:ouline-none" >
        <svg className="stroke-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 mx-auto text-left">
        <p className="text-red-400 font-sm">{error? error : ''}</p>
        <p className="text-green-400 font-sm">{success? success : ''}</p>
          <div >
          {
            file === '' && (
              <div className="border border-dashed border-lilac-light p-5 pb-1 my-2  mx-auto text-center">

            <label for="file" className="font-semibold text-lilac-light">Choose a profile image for your testimonial.</label>
            <input
            type="file"
            id="file"
            className="invisible"
            {...register("faceImage",{required: true })} 
            name="faceImage"
            onChange={handleChange}
            ></input>
            </div>
            )
          }
          {
            file !== '' && (
              <div className="mx-auto w-full flex flex-col items-center">
                <img src={file} alt= "testimonial"></img>
              </div>
            )
          }
          <div>
          <label className="font-semibold text-gray-400 text-left" style={{
            textAlign:"left"
          }}>Full Name</label>
          <div>
          <input
          className = "border border-gray-500 mb-2 w-full mt-1 h-8 rounded"
          {...register("fullname")}
          name="fullname"
          ></input>
          <p className="text-red-400 font-sm">{errors.fullname?.message}</p>
          </div>
          </div>
          <div>
          <label className="font-semibold text-gray-400">Testimonial</label>
          <div>
              <textarea
              className = "border border-gray-500 mb-2 w-full mt-1 h-36 rounded"
              {...register("testimonial")}
              name="testimonial"
              ></textarea>
              <p className="text-red-400 font-sm">{errors.testimonial?.message}</p>
          </div>
          </div>
          </div>
            <div className="text-center mt-1 mb-2">
              <button
            className = "align-center w-6/12  p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black"
              type="submit"
            >
              Create Testimonial 
            </button>
              </div>
        </form>
    </div>
    </div>
    </div>
  );
};

// CreateTestimonialForm.propTypes = {
//   handleClose: PropTypes.func,
//   open: PropTypes.bool
// };
// }
export default CreateTestimonialForm;