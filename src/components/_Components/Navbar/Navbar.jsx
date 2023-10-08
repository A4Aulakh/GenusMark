'use client'
import { setHamburgerEase, toggleDarkMode } from '@/app/store/slices/hamburgerSlice';
import { setCssClass } from '@/app/store/slices/userSlice';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import Reg from '../Login/Reg';
import LoginWithMob from '../Login/LoginWithMob';
import Image from 'next/image';
import { setLoginPage } from '@/app/store/slices/userSlice';




const Navbar = () => {

    const dispatch = useDispatch();


    // When there is a click on Profile in Navbar

    const handleLogin = () => {
        dispatch(setCssClass("block"));
        dispatch(setHamburgerEase("hidden"));
        dispatch(setLoginPage("hidden"));
        document.body.style.overflow = 'hidden';
    }

    // cssClass is for Login close button
    // loginPage is for toggle login with Mobile

    const cssClass = useSelector((state) => state.users.cssClass);
    const loginPage = useSelector((state) => state.users.loginPage);
    const HamburgerEase = useSelector((state) => state.hambugerhandle.HamburgerEase);
    const darkMode = useSelector((state) => state.hambugerhandle.darkMode);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? 'black' : 'white';
    }, [darkMode]);


    const handleHamburger = () => {
        // Toggle between "block" and "hidden" based on the current state
        const newHamburgerEase = HamburgerEase === "block" ? "hidden" : "block";
        document.body.style.overflow = HamburgerEase === "hidden" ? "hidden" : "";
        dispatch(setHamburgerEase(newHamburgerEase));
    };

    const handleDarkModeToggle = () => {
        dispatch(toggleDarkMode()); // Toggle dark mode state
        dispatch(setHamburgerEase("hidden"));
    };




    return (
        <>
            <nav>
                <div className="navbar flex justify-between items-center bg-darkblue h-[60px] px-4 cursor-pointer">

                    <div className="left mb-2 mr-2">
                        <Link href="/"><Image src="/LogoWhite.png" alt="" width={170} height={170} /></Link>
                    </div>

                    {/* RIGHT SIDE OF THE NAVBAR */}

                    <div className="right flex items-center gap-2">

                        {/* Nation Selector */}

                        <span className='hidden bg-darkbgblack gap-2 pl-3 pr-5 w-80 rounded-2xl items-center h-8 lg:flex'>

                            <span className="drop-down ">
                                <Image src="/searchmain.png" alt="" width={12} height={12} />
                            </span>

                            <span className="nation text-xs">
                                Search
                            </span>


                        </span>


                        <span className='flex bg-darkbgblack gap-2 pl-3 pr-5 rounded-2xl items-center h-8'>

                            <span className="drop-down ">
                                <Image className='lg:w-22' src="/dropdown.png" alt="" width={18} height={18} />
                            </span>

                            <span className="nation text-xs">
                                India
                            </span>


                        </span>

                        {/* Search Hamburger Night Mode and Profile */}

                        <span className='flex gap-4 px-3'>

                            <span onClick={handleDarkModeToggle} className="hidden lg:block mt-[4px]">
                                <Image className='' src="/darkmode.png" alt="" width={18} height={18} />
                            </span>

                            <span id='profile' className="hidden lg:block mt-1" onClick={handleLogin} >
                                <Image className='-mt-px' src="/profile.png" alt="" width={18} height={18} />
                            </span>



                            <span className="hamburger" onClick={handleHamburger}>
                                <Image src="/ham.png" alt="" width={24} height={24} />
                            </span>
                        </span>

                    </div>

                </div>
            </nav>


            {HamburgerEase && (
                <div className={`${HamburgerEase}`}>
                    <div className="absolute top-15 z-20 flex justify-center items-center h-full w-full backdrop-blur-sm">
                        <Sidebar />
                    </div>
                </div>)}



            {cssClass && (
                <div className={`${cssClass}`}>
                    <div className="z-20 absolute flex justify-center items-center h-full w-full backdrop-blur-sm">
                        <Reg />
                    </div>
                    <div className="z-10 absolute inset-0 bg-black opacity-40"></div>
                </div>
            )}

            {loginPage && (
                <div className={`${loginPage}`}>
                    <span className="z-30 absolute flex justify-center items-center h-full w-full">
                        <LoginWithMob />
                    </span>
                </div>
            )}

        </>
    )
}

export default Navbar;