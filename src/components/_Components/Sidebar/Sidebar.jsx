'use client'
import { setHamburgerEase, toggleDarkMode } from '@/app/store/slices/hamburgerSlice';
import { setCssClass } from '@/app/store/slices/userSlice';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setCssClass("block"));
    dispatch(setHamburgerEase("hidden"));
  }

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode()); // Toggle dark mode state 
  };


  const darkMode = useSelector((state) => state.hambugerhandle.darkMode);



  return (
    <>
      <div className={`${darkMode ? "btnbg-dark" : "bg-white"} absolute mt-2  text-black pb-10  top-0  flex flex-col w-2/3 lg:w-1/4 right-2 lg:right-2 shadow rounded-lg lg:mt-2 z-10`}>

        <div className='container flex justify-end pr-4 gap-3 mt-4 lg:hidden'>
          <span onClick={handleDarkModeToggle} className=" ">
            <Image className="" src={darkMode ? "/darkmode.png" : "/darkmodeprimary.png"} alt="" width={18} height={18} />
          </span>

          <span id="profile" className=" " onClick={handleLogin}>
            <Image className="-mt-px" src={darkMode ? "/profile.png" : "/profileprimary.png"} alt="" width={18} height={18} />
          </span>
        </div>

        <div className="flex overflow-hidden flex-wrap justify-center lg:mt-5 ">
     
            <Image className="  shadow rounded-full max-w-full h-auto align-middle border-none" src="/user.jpg" alt="user" width={90} height={90} />
       
        </div>


        <div className="button flex justify-center rounded-xl mx-10 mt-3 text-center btnbg-dark">
          <button className={` py-2  rounded-xl text-center ${darkMode ? "bg-white px-16 text-black" : "text-white"}`}> View and Edit</button>
        </div>

        <hr className='mt-5' />

        <ul className={`px-2 flex flex-col justify-start ml-10 mt-5 ${darkMode ? "text-white" : "text black"}`}>

          <li className='  mt-1 rounded-xl'>My Ads</li>
          <li className='  mt-1 rounded-xl'>Plans and Billing</li>
          <li className='  mt-1 rounded-xl'>Help</li>
        </ul>


        <hr className='mt-5' />


        <ul className={`px-2 flex flex-col justify-start ml-10 mt-5 ${darkMode ? "text-white" : "text black"}`}>
          <li className=' mt-1 rounded-xl'>Password Reset</li>
          <li className=' mt-1 rounded-xl'>Settings</li>


        </ul>

        <hr className='my-5' />

        <div className="button flex justify-center rounded-xl mx-10 mt-3 text-center btnbg-dark">
          <button className={` py-2  rounded-xl text-center ${darkMode ? "bg-white px-24 text-black" : "text-white"}`}>Logout</button>
        </div>
 
      </div>
      <div className="z-1 absolute inset-0 bg-black opacity-40"></div>
      
    </>
  );
};

export default Sidebar





