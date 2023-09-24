import React from 'react'

const Navbar = () => {
  return (
   <>
    <nav>
        <div  className="navbar flex justify-between items-center bg-darkblue h-[60px] px-4">

            <div className="left mb-2 mr-2">
                <img src="./LogoWhite.png" alt=""/> 
            </div>

            {/* RIGHT SIDE OF THE NAVBAR */}

            <div className="right flex items-center ">

                {/* Nation Selector */}

                <span className='flex bg-darkbgblack rounded-2xl items-center h-8'>
                    
                   

                    <div className="nation text-xs px-4">
                        India
                    </div>

                    <div className="drop-down pr-4">
                        <img src="./dropdown.png" alt="" width={12} />
                    </div>
                </span>

                {/* Search Night Mode and Profile */}

                <span className='flex gap-4 px-3'>
                    <span className="search">
                        <img src="./searchmain.png" alt="" width={18} />
                    </span>

                    <span className="darkmode">
                        <img src="./darkmode.png" alt="" width={18} />
                    </span>

                    <span className="profile">
                        <img src="./profile.png" alt="" width={18} />
                    </span>
                </span>

            </div>

         </div>
    </nav>
   </>
  )
}

export default Navbar