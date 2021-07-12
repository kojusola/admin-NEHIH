import React,{useState} from 'react';
import {
    useQuery
  } from 'react-query';
import * as api from '../store/auth.js';
import Sidebar from '../components/sidebar';
import ColoredLogo from '../assets/colored-logo.png';
import Loader from '../components/loader';

const AdminManagement = () => {
    const hideData = false
    const [pageBar, setPageBar] = useState('manage');
    const [authorizeId, setAuthorizeId] = useState();
    const [unauthorizeId, setUnauthorizeId] = useState();
    const { data, isLoading} =useQuery('admin', api.getAdmin);
    const {admin} = useQuery(['authorizedAdmin', authorizeId],()=> api.authorizingAdmin(authorizeId), {
        enabled: Boolean(authorizeId)
    });

    const {adminUnauthorized} = useQuery(['unauthorizedAdmin', unauthorizeId],()=> api.unauthorizeAdmin(unauthorizeId), {
        enabled: Boolean(unauthorizeId)
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
    };
    return ( 
        <div>
            {/* // <div>
        // {data?.data.articles?.map(article=> 
        //     <div key={article._id}>
        //         <li >{article._id}</li>
        //         <button onClick={()=>setArticleId(article._id)} >view</button>
                <button onClick={()=>setPublishId(article._id)} >publish/unpublish</button>
            </div>
         )}
        </div> */}
        <div className="flex h-screen flex-col">
        <div className="flex-shrink-0">
        <div className="w-full flex justify-between bg-gray-800 py-4 text-white font-semibold text-lg">
        <img src={ColoredLogo} className="w-20 h-8 ml-5" alt="Logo"></img> 
        <div className="w-10/12 mx-auto">
            <p className="text-center">Admin Management</p>
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
                    <div className="flex w-10/12">
                    <p className="w-1/12 text-gray-500 tracking-wider">S/N</p>
                    <p className="w-3/12 text-gray-500 tracking-wider">Name</p>
                    <p className="w-4/12 text-gray-500 tracking-wider">Email</p>
                    <p className="w-2/12 text-gray-500 tracking-wider">Authorized</p>
                    </div>
                </div>
                {
                    data?.data.emailExist.map(admin=>
                        <div className="w-full py-2 flex border-b border-gray-300">
                            <div className="w-10/12 flex ">
                            <p className="w-1/12 text-gray-900 text-xs tracking-normal">{data?.data.emailExist.indexOf(admin) + 1}</p>
                            <p className="w-3/12 text-gray-900 text-xs tracking-normal">{admin?.fullname}</p>
                            <p className="w-4/12 text-gray-900 text-xs tracking-normal">{admin?.email}</p>
                            <p className="w-2/12 text-gray-900 text-xs tracking-normal">{admin?.authorized}</p>
                            </div>
                            {
                                admin?.authorized === "true" &&
                                <button onClick={()=> setUnauthorizeId(admin._id)} className=" text-xs p-1 bg-lilac-logo border rounded-sm border-transparent hover:border-black hover:bg-white text-white hover:text-black ">Unauthorize</button>
                            }

                            {
                                admin?.authorized ==="false" &&
                                <button onClick={()=> setAuthorizeId(admin._id)} className=" text-xs p-1 bg-lilac-logo border rounded-sm border-transparent hover:border-black hover:bg-white text-white hover:text-black ">Authorize</button>
                            }
                        </div>
                    )
                        
                }
            </div>
        </div>
        </div>
    </div>
    {
        hideData && (
                <div>
                    {admin }
                    {adminUnauthorized}
                </div>
        )
    }
        </div>

     );
}
 
export default AdminManagement;