import React from 'react'

const FreshRec = () => {
  return (
   <>

   
<h2 className='ml-4 mt-5'>Fresh Recommendations</h2>

    <div className="container flex mt-3 gap-3 px-3">

      <div className=" relative flex flex-col justify-center items-start bgp rounded-3xl mx-0 px-2 w-[40wh] py-3">
        <div>
        <img className='rounded-3xl ' src="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/iphone-15-084541573-16x9_0.png?VersionId=pRutG6KiIBL2acG2uAAUgRABAsECOi4k&size=690:388" alt="" width={300} />

        <span className='top-6 absolute right-5'><img src="./Save.png" alt="" width={22} /></span>
        </div>

        <div className="flex mt-2 items-start">
          <span>
            <img src="./RupeeS.png" alt="" width={22} />
            </span>
            
            <span>
              79,000/-
            </span>
        </div>

        <div className="desc font-extralight text-sm">
          Iphone 15 
        </div>

        <div className="location text-xs">
          Nabha Patiala Punjab India
        </div>
      </div>


      <div className=" relative flex flex-col justify-center items-start bgp rounded-3xl mx-0 px-2 w-[40wh]">
        <img className='rounded-3xl mt-0' src="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/iphone-15-084541573-16x9_0.png?VersionId=pRutG6KiIBL2acG2uAAUgRABAsECOi4k&size=690:388" alt="" width={300} />

        <span className='top-5 absolute right-6'><img src="./Save.png" alt="" width={22} /></span>

        <div className="flex mt-2 items-start">
          <span>
            <img src="./RupeeS.png" alt="" width={22} />
            </span>
            
            <span>
              79,000/-
            </span>
        </div>

        <div className="desc">
          Iphone 15 
        </div>

        <div className="location">
          Nabha Patiala Punjab India
        </div>
      </div>


    </div>
    
   </>
  )
}

export default FreshRec