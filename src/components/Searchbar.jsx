import React, { useContext, useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

const Searchbar = () => {

    const { search, setSearch,} = useContext();
    const [visible,setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('')){
            setVisible(true);
        }
        else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
            <IoIosSearch className='w-4' />
        </div>
        <IoCloseSharp className='inline w-3 cursor-pointer' />
    </div>
  ) : null
}

export default Searchbar
