import React,{useState} from 'react';
import {
    useQuery
  } from 'react-query';
import * as api from '../store/newsletter.js';
import Sidebar from '../components/sidebar';
import ColoredLogo from '../assets/colored-logo.png';
import Loader from '../components/loader';
import { CSVLink } from 'react-csv';

const Emails = () => {
    const [pageBar, setPageBar] = useState('newsletter');
    const [dataCsv, setDataCsv] = useState([]);
    const { data, isLoading, onSuccess} =useQuery('newsletter', api.getNewsletter );

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
    if(onSuccess){
       return setDataCsv(data.data.Emails)
    
    };
    const headers = [
        {label:'Email',key:'email'}
    ]
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
            <p className="text-center">Newsletter Emails</p>
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
                <div className="w-full  flex">
                    <div className="flex w-8/12 border-b border-gray-300">
                    <p className="w-4/12 text-gray-500 tracking-wider">S/N</p>
                    <p className="w-8/12 text-gray-500 tracking-wider">Email</p>
                    </div>
                    <CSVLink
                        headers={headers}
                        data={dataCsv? dataCsv: null}
                        filename={"Newsletter_Emails.csv"}
                    >
                        <button className="p-1 ml-20 text-xs bg-lilac-logo border rounded-sm border-transparent hover:border-black hover:bg-white text-white hover:text-black ">Export Emails
                        </button>
                    </CSVLink>
                    
                </div>
               
                {
                    data?.data.Emails.map(email => 
                    <div className="w-full py-2 flex">
                        <div className="flex w-8/12 border-b border-gray-300">
                            <p className="w-4/12 text-gray-900 text-xs tracking-normal">{data.data.Emails.indexOf(email) +1}</p>
                            <p className="w-8/12 text-gray-900 text-xs tracking-normal"> {email.email}</p>
                            </div>
                    </div>
                    )
                }

                 </div>
        </div>
        </div>
    </div>
        </div>

     );
}
 
export default Emails;