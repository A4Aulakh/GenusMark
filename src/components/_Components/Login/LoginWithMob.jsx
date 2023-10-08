// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLoginPage } from '@/app/store/slices/userSlice';

// const LoginWithMob = () => {
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.hambugerhandle.darkMode); // Get the dark mode state

//   const handleLoginClose = () => {
//     dispatch(setLoginPage("hidden"));
//   };

//   const HandleUserNumber = () => {
//     // dispatch(setPhoneNumber(value));
//   };

//   // Define conditional classes based on darkMode
//   const containerClasses = darkMode
//     ? 'text-white bg-black lg:w-1/3 p-10 mx-5 lg:p-16 z-10 sm:w-2/3 rounded-xl py-10 lg:min-w-[450px] min-w-[250px]'
//     : 'text-black bg-white lg:w-1/3 p-10 mx-5 lg:p-16 z-10 sm:w-2/3 rounded-xl py-10 lg:min-w-[450px] min-w-[250px]' ;


//     const btnbgClass = darkMode ? 'btnbg-dark' : 'bg-white';

//   return (
//     <>
//       <span className={containerClasses}>
//         <span onClick={handleLoginClose} className='flex justify-end hover:scale-y-105 cursor-pointer mb-12'>
//           <img className='w-[28px]' src="./close.png" alt=" " width={35} />
//         </span>
//         <div className="flex-col flex justify-center items-center gap-2">
//           <img className='w-[80px] mb-2'  src="./logingate.png" alt="" width={100} />

//             <PhoneInput
//               international
//               defaultCountry="IN"
//               className={` ${btnbgClass} w-64 px-2 sm:w-2/3 border  text-black py-3 lg:px-[12px] rounded-lg items-center flex gap-5 hover:scale-y-105 cursor-pointer`}
//               onChange={HandleUserNumber}
//               // value={phoneNumber}
//             />

//           <span className="btn bgp text-white py-3 w-64 sm:w-2/3 justify-center text-center rounded-lg items-center flex gap-5 hover:scale-y-105 cursor-pointer">Next</span>
//           <p className='p-4 mt-5 w-3/4 lg:w-2/3 text-center text-xs'>Your contact number is never shared with external parties nor do we use it to spam you in any way.</p>
//         </div>
//       </span>
//     </>
//   );
// };

// export default LoginWithMob;

import React from 'react';
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "@/firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { setCssClass } from '@/app/store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginPage } from '@/app/store/slices/userSlice';
import UserLogged from './UserLogged';



const App = () => {

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.hambugerhandle.darkMode); // Get the dark mode state

  const handleLoginClose = () => {
    dispatch(setLoginPage("hidden"));
  };

  const HandleUserNumber = () => {
    // dispatch(setPhoneNumber(value));
  };

  // Define conditional classes based on darkMode
  const containerClasses = darkMode
    ? 'text-white bg-black lg:w-1/3 p-10 mx-5 lg:p-20 z-10 sm:w-2/3 rounded-xl py-10 lg:min-w-[450px] min-w-[250px] flex justify-center'
    : 'text-black bg-white lg:w-1/3 p-10 mx-5 lg:p-20 z-10 sm:w-2/3 rounded-xl py-10 lg:min-w-[450px] min-w-[250px] flex justify-center';


  const btnbgClass = darkMode ? 'btnbg-dark' : 'bg-white';


  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        onSignup();
      },
      'expired-callback': () => {

      }
    });
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
  
        // Add a delay of 1000 milliseconds (1 second) before dispatching actions
        setTimeout(() => {
          dispatch(setLoginPage("hidden"));
          dispatch(setCssClass("hidden"));
  
          // Define the anchor element
          const a = document.createElement("a");
  
          // Set the href property of the anchor element
          a.href = `/account/${ph}`;
  
          // Trigger a click event on the anchor element to navigate to the URL
          a.click();
        }, 1000); // You can adjust the delay time as needed
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  


  return (
    <section className={containerClasses}>
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <>


          </>
        ) : (
          <> <span onClick={handleLoginClose} className='flex justify-end hover:scale-y-105 cursor-pointer mb-4 '>
            <img className='w-[28px]' src="/close.png" alt=" " width={35} />
          </span>
            <div className="w-full flex flex-col gap-4 rounded-lg items-center justify-center">

              <div className="flex-col flex justify-center items-center gap-2">
                <img className='w-[80px] mb-2' src="/logingate.png" alt="" width={100} />
              </div>


              {showOTP ? (
                <>

                  <label
                    htmlFor="otp"
                    className="font-bold text-xl text-black text-center"
                  >
                    Enter your OTP
                  </label>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container text-black"
                  ></OtpInput>
                  <button
                    onClick={onOTPVerify}
                    className="bgp w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Verify OTP</span>
                  </button>
                </>
              ) : (
                <>

                  <label
                    htmlFor=""
                    className="font-bold text-xl text-black text-center"
                  >
                    Verify your phone number
                  </label>

                  <PhoneInput country={"in"} value={ph} onChange={setPh} className="text-black" />

                  <button
                    onClick={onSignup}
                    className="btn bgp text-white py-3 w-[300px]  justify-center text-center rounded-lg items-center flex gap-5 hover:scale-y-105 cursor-pointer"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Send code via SMS</span>
                  </button>


                  <p className='p-4 mt-5 w-3/4 text-center text-xs'>Your contact number is never shared with external parties nor do we use it to spam you in any way.</p>
                </>
              )}
            </div>
          </>)}
      </div>
    </section>
  );
};

export default App;