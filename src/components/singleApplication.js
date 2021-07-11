import React from 'react';
import {
    useQuery
  } from 'react-query';
import * as api from '../store/joinNehih.js';
import Loader from './loader';

const SingleApplication = ({applicationId, toggle}) => {
    const {data, isLoading} = useQuery(['singleApplication', applicationId],()=> api.getSingleApplications(applicationId), {
        enabled: Boolean(applicationId)
    });
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
    console.log(data);
    return ( 
        // <div>{published}</div>
        <div>
        {/* {singleapplication?.data.applications.map(application=> 
        )} */}
            <div>
            <div className="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                <div className="relative mx-auto w-10/12 sm:w-6/12 border border-transparent rounded-lg shadow-lg">
                  <div className="p-6 pt-3 bg-white rounded-lg shadow-xl">
                    <button onClick={()=>toggle(false)} className="absolute top-0 right-0 hover:text-lilac-light focus:ouline-none" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <form  className="mb-4 xl:my-8 text-left mx-auto bg-white sm:my-0  text-gray-600 font-medium">
                      <p className="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center">Name: <span className="text-gray-900">{data?.data.application.fullname} </span> </p>
                      <div className="w-full">
                      <p className="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center">Email: <span className="text-gray-900">{data?.data.application.email}</span> </p>
                     </div>
                      <div className="w-full">
                      <p className="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center">Phone Number: <span className="text-gray-900">{data?.data.application.phone}</span> </p>
                      </div>
                      <div className="w-full">
                      <p className="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center">Reason <span className="text-gray-900">{data?.data.application.reason}</span> </p>
                      </div>
                      <div className="w-full">
                      <p className="topic pb-4 lg:pb-6 text-lilac-light text-lg text-center"></p>
                      </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
     );
}
 
export default SingleApplication;