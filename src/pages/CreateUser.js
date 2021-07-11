import React from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { createAdmin } from '../store/auth';
import Background from '../assets/sigin.jpg';

const schema = yup.object().shape({
  fullname: yup.string().min(6).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Register= () => {
//   const { open, handleClose } = props;
  const queryClient = useQueryClient();
  const { register, handleSubmit,formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const { mutate } = useMutation (createAdmin, {
    onSuccess: data => {
      console.log(data);
      const message = "success"
      alert(message);
    },
    onError: (error) => {
      console.log(error);
      // alert("there was an error")
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    }
  });
  const onSubmit = (data) => {
    const admin = {
      ...data
    };
    mutate(admin);
    reset();
  };

  return (
    <div className="w-full h-screen flex">
       <div className="w-1/2">
       <form onSubmit={handleSubmit(onSubmit)} className=" justify-center my-12 mx-4  mx-auto">
       <h3 className="text-lilac-logo font-bold text-3xl my-2">NEHIH</h3>
          <p className= "text-lilac-logo font-semibold text-lg" >
            Register
          </p>
          <div>
          <input
          className ="border border-gray-500 mb-8 w-8/12 mt-4 h-8 rounded"
          {...register("fullname")}
          name="fullname"
          placeholder="Full Name"
          ></input>
          <p className="text-red-400 font-sm">{errors.fullname?.message}</p>
          <input
          className ="border border-gray-500 mb-8 w-8/12 h-8 rounded"
          {...register("email")}
          name="email"
          placeholder="Email"
          ></input>
          <p className="text-red-400 font-sm">{errors.email?.message}</p>
          <input
          className ="border border-gray-500 mb-8 w-8/12 h-8 rounded"
          {...register("password")}
          name="password"
          type ="password"
          placeholder="Password"
          ></input>
          <p className="text-red-400 font-sm">{errors.password?.message}</p>
          </div>
          <div>
           <button
            className ="w-6/12 mt-3 p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black"
              type="submit"
            >
              Register
            </button>
           </div>
           <p>Do you have an account? <a href="/" className="text-lilac-light">Login</a></p>
        </form>
       </div>
       <div className="w-1/2" style={{
          backgroundImage: "url("+Background+")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}>
        </div>
    </div>
  );
};

export default Register;