import React from 'react'
import Navbar from './_Components/Navbar/Navbar'
import ScrollNav from './_Components/ScrollingNav/ScrollNav'
import Hero from './_Components/Hero/Hero'
import AdBox1 from './_Components/Hero/AdBox1'
import Footer from './_Components/Footer/Footer'

const Homepage = () => {
    return (
       <>
       
       <Navbar/>
       <ScrollNav/>


       <Hero/>
       <AdBox1/>

        <Footer/>
   


       
       </>
    )
}

export default Homepage