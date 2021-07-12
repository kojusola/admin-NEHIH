import React from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { createTestimonial } from '../store/testimonial.js';
import Loader from './loader';

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
//   const { open, handleClose } = props;
  const queryClient = useQueryClient();
  const { register, handleSubmit ,formState: { errors }, reset} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const { mutate, isLoading } = useMutation (createTestimonial, {
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
    formData.append("fullname", data.fullname);
    formData.append("testimonial", data.testimonial);
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
    <div className="fixed overflow-x-hidden overflow-y-auto flex justify-center items-center z-50 bg-black bg-opacity-70">
      <div className="relative overflow-y-auto h-auto  mx-auto w-10/12 sm:w-7/12 border border-transparent rounded-lg shadow-lg">
        <div className="p-6 pt-3 overflow-y-auto  bg-white rounded-lg shadow-xl">
        <button onClick={()=>toggle(false)} className="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 mx-auto text-left">
          <div >
          <div className="border border-dashed border-lilac-light p-5 pb-1 my-2  mx-auto text-center">

          <label for="file" className="font-semibold text-lilac-light">Choose a profile image for your testimonial.</label>
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
              className = "border border-gray-500 mb-3 w-full mt-1 h-96 rounded"
              {...register("testimonial")}
              name="testimonial"
              ></textarea>
              <p className="text-red-400 font-sm">{errors.testimonial?.message}</p>
          </div>
          </div>
          </div>
            <div className="text-center mt-1 mb-2">
              <button
            className = "align-center w-6/12 mb-2  p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black"
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