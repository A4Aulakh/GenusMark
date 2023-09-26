import React from 'react'
import Navbar from './_Components/Navbar/Navbar'
import ScrollNav from './_Components/ScrollingNav/ScrollNav'
import Hero from './_Components/Hero/Hero'
import AdBox1 from './_Components/Hero/AdBox1'
import Footer from './_Components/Footer/Footer'
import Reg from './_Components/Login/Reg'

const Homepage = () => {
    return (
        <>
            <div className=''>
            <div className="absolute flex justify-center items-center h-full w-full  backdrop-blur-md">
                <Reg />
            </div>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>



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
    )
}

export default Homepage