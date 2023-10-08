
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>

      <div className="flex flex-col md:flex-row items-center mt-4 mx-3 lg:mx-10 lg:justify-center my-10 gap-8">


        <div className=" text-black opac px-10 rounded-2xl py-10 lg:py-20 justify-center flex-col items-center gap-5 hidden lg:flex w-1/4" >

          <div className='rounded-full flex justify-center'><Image className=' rounded-full object-fill ' src="/user.jpg" alt="" width={110} height={110} /></div>

          <ul className=' flex  flex-col  w-full'>
            <li className='btnbg-dark text-white h-10 w-full py-2 mt-2 rounded-xl text-center'>Edit Photo</li>
            <li className='btnbg-dark text-white h-10 w-full py-2 mt-2 rounded-xl text-center'>Your Ads</li>
            <li className='btnbg-dark text-white h-10 w-full py-2 mt-2 rounded-xl text-center'>Plans and Billing</li>
            <li className='btnbg-dark text-white h-10 w-full py-2 mt-2 rounded-xl text-center'>Password Reset</li>
            <li className='btnbg-dark text-white h-10 w-full py-2 mt-2 rounded-xl text-center'>Logout</li>
          </ul>
        </div>


        <div className="text-black opac w-full px-5 mx-0 my-2 rounded-2xl py-10 ">


          <section className=''>
            <h3>Basic Information:</h3>
            <div className='flex flex-col gap-2 mt-2 text-sm lg:text-base'>
              <input className=' py-2 rounded-xl px-4' type="text" placeholder='Name' />
              <input className=' py-2 h-16 rounded-xl px-4' type="desc" placeholder='About you and your works' />
            </div>
          </section>
          <hr className='my-10' />


          <section className=''>
            <h3>Contact Information:</h3>
            <div className='flex flex-col gap-2 mt-2 text-sm lg:text-base'>

            <div className="flex items-center gap-2 text-gray-500 text-xs justify-between w-auto">
              <input className='py-2 rounded-xl px-2 w-max lg:w-1/2 lg:text-base ' type="phone" placeholder='Phone Number' />
              <p>Yah! Your Number is Verified</p>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-xs justify-between w-auto">
              <input className='py-2 rounded-xl px-2 w-max lg:w-1/2 lg:text-base ' type="email" placeholder='Email' />
              <p>Your email is never shared with external parties nor do we use it to spam you in any way</p>
              </div>

            </div>
          </section>

          <div className="flex justify-center my-10 lg:justify-end">



            <button className='btnbg-dark text-white px-10 py-2 mx-2 rounded-xl'>Discard</button>
            <button className='btnbg-dark text-white px-10 py-2 mx-2 rounded-xl'> <a href="/">Save Changes</a></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default page