import React, {useState} from 'react';
import {
    useQuery
  } from 'react-query';
import * as api from '../store/testimonial.js';
import Sidebar from '../components/sidebar'
import CreateTestimonial from '../components/createTestimonial.js';
import Loader from '../components/loader';
import ColoredLogo from '../assets/colored-logo.png';

const Testimonial = () => {
    const [pageBar, setPageBar] = useState('testimonial');
    const [toggle, setToggle] = useState(false)
    const [testimonialId, setTestimonialId] = useState()
    const { data, isLoading} =useQuery('testimonials', api.getAllTestimonial);
    const {deleteTestimonial} = useQuery(['deleteTestimonial', testimonialId],()=> api.deleteTestimonial(testimonialId), {
        enabled: Boolean(testimonialId)
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
    console.log(deleteTestimonial)
    console.log(toggle);
    // if(onSuccess){
    //     return (
    //         <div>Loading</div>
    //     )
    // }
    // console.log(data.data.testimonials);
    return ( 
        <div>
            {/* // <div>
        // {data?.data.testimonials?.map(testimonial=> 
        //     <div key={testimonial._id}>
        //         <li >{testimonial._id}</li>
        //         <button onClick={()=>settestimonialId(testimonial._id)} >view</button>
                <button onClick={()=>settestimonialId(testimonial._id)} >publish/unpublish</button>
            </div>
         )}
        </div> */}
        <div className="flex h-screen flex-col">
        <div className="flex-shrink-0">
        <div className="w-full flex justify-between bg-gray-800 py-4 text-white font-semibold text-lg">
        <img src={ColoredLogo} className="w-20 h-8 ml-5" alt="Logo"></img> 
        <div className="w-10/12 mx-auto">
            <p className="text-center"> Testimonials</p>
        </div>
        </div>
        </div>
        <div className=" pb-4 flex-1 flex overflow-hidden">
        <Sidebar
            pageBar={pageBar}
            setPageBar={setPageBar}
        />
        <div className="flex-1  overflow-y-auto"> 
        {
            toggle === false && (
                <div className="w-full pt-6 mx-auto">
                <div className="w-full  flex">
                    <div className="w-9/12 mx-auto flex border-b border-gray-300 ">
                    <p className="w-1/12 text-gray-500 text-sm tracking-wider">S/N</p>
                    <p className="w-2/12 text-gray-500 text-sm tracking-wider">FullName</p>
                    <p className="w-9/12  text-gray-500 text-sm  tracking-wider">Testimonial</p>
                    </div>
                    <div className="w-3/12">
                    <button onClick={()=>setToggle(true)} className=" p-1 mx-auto text-xs bg-lilac-logo border rounded-sm border-transparent hover:border-black hover:bg-white text-white hover:text-black ">Create Testimonial</button>
                    </div>
                </div>
                {data?.data.testimonial.map(testimonial=>
                    <div className="w-full mx-auto py-2 flex ">
                        <div key={testimonial._id} className="w-full ">
                        <div className="w-9/12 py-1 flex border-b border-gray-300">
                        <p className="w-1/12 text-gray-900 text-xs tracking-normal">{data?.data.testimonial.indexOf(testimonial) +1}</p>
                        <p className="w-2/12 mx-auto text-gray-900 text-xs tracking-normal"> {testimonial?.fullname}</p>
                        <p className="w-7/12 text-gray-900 text-xs tracking-normal">{testimonial?.testimonial}</p>
                        <button onClick={()=>setTestimonialId(testimonial._id)} className=" ml-3 py-1 text-xs bg-lilac-logo border rounded-sm border-transparent hover:border-black hover:bg-white text-white hover:text-black ">Delete</button>
                        </div>
                        
                        </div>
                    </div>
                )}
            </div>
            )
        }
        { toggle ===true && (
            <div className="w-10/12 pt-6 mx-auto">
                <CreateTestimonial 
                    toggle={setToggle}
                />
            </div>
        )}
        </div>
        </div>
    </div>
        </div>

     );
}
 
export default Testimonial;