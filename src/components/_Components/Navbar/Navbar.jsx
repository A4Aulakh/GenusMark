'use client'
import { setHamburger } from '@/app/store/slices/hamburgerSlice';
import { setCssClass } from '@/app/store/slices/userSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch();

    const handleHamburger = () => {
        dispatch(setHamburger("block"));
    }

    handleHamburger()
    
    const handleLogin = () => {
        dispatch(setCssClass("block"));
    }



    return (
        <>
            <nav>
                <div className="navbar flex justify-between items-center bg-darkblue h-[60px] px-4 cursor-pointer">

                    <div className="left mb-2 mr-2">
                        <img src="./LogoWhite.png" alt="" width={170} />
                    </div>

                    {/* RIGHT SIDE OF THE NAVBAR */}

                    <div className="right flex items-center gap-2">

                        {/* Nation Selector */}

                        <span className='hidden bg-darkbgblack gap-2 pl-3 pr-5 w-80 rounded-2xl items-center h-8 lg:flex'>

                            <span className="drop-down ">
                                <img src="./searchmain.png" alt="" width={12} />
                            </span>

                            <span className="nation text-xs">
                                Search
                            </span>


                        </span>


                        <span className='flex bg-darkbgblack gap-2 pl-3 pr-5 rounded-2xl items-center h-8'>

                            <span className="drop-down ">
                                <img className='lg:w-22' src="./dropdown.png" alt="" width={18} />
                            </span>

                            <span className="nation text-xs">
                                India
                            </span>


                        </span>

                        {/* Search Hamburger Night Mode and Profile */}

                        <span className='flex gap-4 px-3'>

                            <span className="hidden lg:block mt-[4px]">
                                <img className='' src="./darkmode.png" alt="" width={18} />
                            </span>

                            <span id='profile' className="hidden lg:block mt-1" onClick={handleLogin} >
                                <img className='-mt-px' src="./profile.png" alt="" width={18} />
                            </span>



                            <span  className="hamburger" onClick={handleHamburger}>
                                <img src="./ham.png" alt="" width={24} />
                            </span>
                        </span>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar;