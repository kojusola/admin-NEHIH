import React, {useState} from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';
import { loginAdmin } from '../store/auth';
import Background from '../assets/sigin.jpg';
import  { Redirect } from 'react-router-dom'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});


const Login= () => {
//   const { open, handleClose } = props;
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const { mutate } = useMutation (loginAdmin, {
    onSuccess: data => {
      console.log(data.data);
      sessionStorage.setItem("accessJWT", data.data.accessJWT);
      sessionStorage.setItem("role", data.data.role);
      return <Redirect to={{
        pathname: "/admin"
        }}/>
    },
    onError: (err) => {
      console.log(err);
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
        <form onSubmit={handleSubmit(onSubmit)} className=" justify-center my-20 mx-4  mx-auto">
        <h3 className="text-lilac-logo font-bold text-3xl my-2">NEHIH</h3>
          <p className= "text-lilac-logo font-semibold text-lg" >
            Login
          </p>
          <div>
          {/* <label className= "inline-block">Email</label> */}
          <input
          className ="border border-gray-500 mb-10 w-8/12 mt-4 h-8 rounded"
          {...register("email")}
          name="email"
          placeholder ="Email Address"
          ></input>
           <p className="text-red-400 font-sm">{errors.email?.message}</p>
          </div>
          <div>
          {/* <label className= "inline-block">Password</label> */}
          <input
          className ="border border-gray-500 mb-10 w-8/12 mt-4 h-8 rounded focus:border-lilac-light"
          {...register("password")}
          name="password"
          type= "password"
          placeholder ="Password"
          ></input>
           <p className="text-red-400 font-sm">{errors.password?.message}</p>
          </div>
           <div>
           <button
            className ="w-6/12 mt-3 p-2 rounded-lg bg-lilac-light border border-transparent hover:bg-white hover:border hover:border-gray-500 text-white hover:text-black"
              type="submit"
            >
              log in
            </button>
           </div>
           <p>You do not have an account? <a href="/register" className="text-lilac-light">Register</a></p>
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

export default Login;