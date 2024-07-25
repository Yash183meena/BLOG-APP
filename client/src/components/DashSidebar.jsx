import { Sidebar } from "flowbite-react"
import {HiUser,HiArrowSmRight} from 'react-icons/hi';
import { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DashSidebar = () => {

   const location=useLocation();
   const [tab,setTab]=useState('');
 
   useEffect(()=>{
     const ulrParams=new URLSearchParams(location.search);
     const tabFromUrl=ulrParams.get('tab');
 
     if(tabFromUrl){
       setTab(tabFromUrl);
     }
     
     console.log(tabFromUrl);
      
   },[location.search]);

  return (
    <Sidebar>
       <Sidebar.Items>
            <Sidebar.ItemGroup>
                  <Link to='/dashboard?tab=profile'>
               <Sidebar.Item active={tab==='profile'} icon={HiUser} label={'User'} labelColor='dark' as='div'>
                  Profile
               </Sidebar.Item>
               </Link>
               <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
                  Sign Out
               </Sidebar.Item>
            </Sidebar.ItemGroup>
       </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar
