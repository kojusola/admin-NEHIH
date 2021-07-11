import React, {useState} from 'react';
import {
    useQuery
  } from 'react-query';
import * as api from '../store/joinNehih.js';
import Sidebar from '../components/sidebar'
import SingleApplication from '../components/singleApplication';
import Loader from '../components/loader';
import ColoredLogo from '../assets/colored-logo.png';

const Applications = () => {
    const [pageBar, setPageBar] = useState('applications');
    const [toggle, setToggle] = useState(false)
    const [applicationId, setApplicationId] = useState()
    const { data, isLoading} =useQuery('Applications', api.getNehih);
    // const {singleApplication} = useQuery(['publishedApplication', applicationId],()=> api.getSingleApplications(applicationId), {
    //     enabled: Boolean(applicationId)
    // });
    console.log(data)
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
    // if(onSuccess){
    //     return (
    //         <div>Loading</div>
    //     )
    // }
    // console.log(data.data.Applications);
    // const published = data.map((each)=> 
    // <div key={data.data.Applications._id}>data.data.Applications._id</div>)
    return ( 
        <div>
            {/* // <div>
        // {data?.data.Applications?.map(Application=> 
        //     <div key={Application._id}>
        //         <li >{Application._id}</li>
        //         <button onClick={()=>setApplicationId(Application._id)} >view</button>
                <button onClick={()=>setPublishId(Application._id)} >publish/unpublish</button>
            </div>
         )}
        </div> */}
        <div className="flex h-screen flex-col">
            <div className="flex-shrink-0">
            <div className="w-full flex justify-between bg-gray-800 py-4 text-white font-semibold text-lg">
            <img src={ColoredLogo} className="w-20 h-8 ml-5" alt="Logo"></img> 
            <div className="w-10/12 mx-auto">
                <p className="text-center">Applications to join NEHIH</p>
            </div>
            </div>
            </div>
        <div className=" pb-4 flex-1 flex overflow-hidden">
        <Sidebar
            pageBar={pageBar}
            setPageBar={setPageBar}
        />
        <div className="flex-1  overflow-y-auto"> 
        <div className="w-10/12 pt-6 mx-auto">
                <div className="w-full p- flex border-b border-gray-300">
                    <div className=" w-full flex">
                    <p className="w-1/12 text-gray-500 tracking-wider">S/N</p>
                    <p className="w-4/12 text-gray-500 tracking-wider">Name</p>
                    <p className="w-4/12 px-3 text-gray-500 tracking-wider">Email</p>
                    <p className=" w-3/12 px-3 text-gray-500 tracking-wider">Phone Number</p>
                    </div>
                </div>
                {
                    data?.data.Emails.map(email =>
                        <button onClick={()=>{setToggle(true); setApplicationId(email._id) }} className="w-full py-2 flex border-b border-gray-300">
                            <div className="flex w-full">
                            <p className="w-1/12 text-gray-900 text-xs tracking-normal">{data?.data.Emails.indexOf(email) +1}</p>
                            <p className="w-4/12 text-gray-900 text-xs tracking-normal">{email?.fullname}</p>
                            <p className="w-4/12 px-3 text-gray-900 text-xs tracking-normal">{email?.email}</p>
                            <p className="w-3/12 px-3 text-gray-900 text-xs tracking-normal">{email?.phone}</p>
                            </div>   
                        </button>
                    )
                }
            </div>
        </div>
        { toggle === true && (
            <div>
                <SingleApplication
                    ApplicationId={applicationId}
                    toggle={setToggle}
                />
            </div>
        )}
        </div>
    </div>
        </div>

     );
}
 
export default Applications;