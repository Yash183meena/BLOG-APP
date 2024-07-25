import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

export default function Dashboard() {
  
  const location=useLocation();
  const [tab,setTab]=useState('');

  useEffect(()=>{
    const ulrParams=new URLSearchParams(location.search);
    const tabFromUrl=ulrParams.get('tab');

    if(tabFromUrl){
      setTab(tabFromUrl);
    }
    
    console.log(tabFromUrl);
     
  },[location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>

      <div className=''>
          <DashSidebar/>
      </div>

      {tab==='profile' && <DashProfile/>}

    </div>
  )
}
