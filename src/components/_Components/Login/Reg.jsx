import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCssClass, setLoginPage } from '@/app/store/slices/userSlice';
import { useSession, signIn, signOut } from "next-auth/react"
const Reg = () => {


// How the next auth works !

  // const { data: session } = useSession()
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }


  const dispatch = useDispatch();


  const darkMode = useSelector((state) => state.hambugerhandle.darkMode); // Get the dark mode state

  const handleLoginClose = () => {
    dispatch(setCssClass("hidden"));
    document.body.style.overflow = '';
  };

  const handleLoginUser = () => {
    dispatch(setLoginPage("block"));
  };

  // Define conditional classes based on darkMode
  const containerClasses = darkMode
    ? 'text-white bg-black lg:w-1/3 p-10 mx-5 lg:p-16 z-10  sm:w-2/3 rounded-xl py-10 lg:min-w-[450px] min-w-[250px]'
    : 'text-black bg-white lg:w-1/3 p-10 mx-5 lg:p-16 z-10  sm:w-2/3 rounded-xl py-10 lg:min-w-[450px] min-w-[250px]';

    const btnbgClass = darkMode ? 'btnbg-dark' : 'btnbg';

  return (
    <>
      <span className={containerClasses}>
        <span onClick={handleLoginClose} className='flex justify-end hover:scale-y-105 cursor-pointer mt-4'>
          <img className='w-[28px]' src="/close.png" alt=" " width={35} />
        </span>
        <div className="flex-col flex justify-center items-center">
          <img className='w-[80px] mb-2' src="/logingate.png" alt="" width={100} />


          <span onClick={handleLoginUser} className={`btn ${btnbgClass}  text-sm lg:text-base py-3 px-[57px] items-center rounded-lg mt-2 flex gap-5 hover:scale-y-105 cursor-pointer`}>
            <img className='object-contain' src="/login1.png" alt="" width={20} />Login with OTP
          </span>


          <span onClick={() => signIn()} className={`btn ${btnbgClass}  text-sm lg:text-base py-3 px-[52px] items-center rounded-lg mt-2 flex gap-5 hover:scale-y-105 cursor-pointer `}>
            <img  className='w-[26px] object-contain' src="/Google.png" alt=""  />Google Account
          </span>


          <p className='py-2'>or</p>



          <span className={` ${btnbgClass}  text-sm lg:text-base py-3 lg:py-3 px-[68px] my-1 lg:px-[68px] rounded-lg items-center flex gap-5 hover:scale-y-105 cursor-pointer`}>
            <img className='w-[25px] object-contain' src="/gmail.png" alt="" width={20} />Gmail Login
          </span>


          <p className='p-2 text-center text-sm mt-2'>All your details are safe with us.</p>
          <p className='p-2 text-center text-xs '>Continue means you are accepting Genus Terms and Conditions and Privacy Policies</p>
        </div>
      </span>
    </>
  );
};

export default Reg;
