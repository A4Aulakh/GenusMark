'use client'

import React from 'react'
import Navbar from './_Components/Navbar/Navbar'
import ScrollNav from './_Components/ScrollingNav/ScrollNav'
import Hero from './_Components/Hero/Hero'
import AdBox1 from './_Components/Hero/AdBox1'
import Footer from './_Components/Footer/Footer'
import Reg from './_Components/Login/Reg'
import { useSelector } from 'react-redux'
import LoginWithMob from './_Components/Login/LoginWithMob';
import Sidebar from './_Components/Sidebar/Sidebar';

const Homepage = () => {

    const cssClass = useSelector((state) => state.users.cssClass);
    const loginPage = useSelector((state) => state.users.loginPage);
    const HamburgerEase = useSelector((state) => state.hambugerhandle.HamburgerEase);


    return (
        <>


            {loginPage && (
                <div className={`${loginPage}`}>
                    <span className='z-30 absolute flex justify-center items-center h-full w-full'>

                        <LoginWithMob />

                    </span>
                
                </div>)
            }


            {cssClass && (
                <div className={`${cssClass}`}>
                    <div className="z-20 absolute flex justify-center items-center h-full w-full backdrop-blur-sm">
                        <Reg />
                    </div>
                    <div className="z-10 absolute inset-0 bg-black opacity-40"></div>
                </div>
            )}


               {HamburgerEase && (
               <div className={`${HamburgerEase}`}>
                <div className="absolute top-16 z-20 flex justify-center items-center h-full w-full backdrop-blur-sm">
            <Sidebar/>
            </div>
                </div>)}
         



            <Navbar />

            <div className="md:px-2 2xl:px-10">
                <ScrollNav />

                <div className="md:px-20 2xl:px-30">
                    <Hero />
                    <AdBox1 />
                </div>
            </div>
            <Footer />
        </>
    );


}

export default Homepage