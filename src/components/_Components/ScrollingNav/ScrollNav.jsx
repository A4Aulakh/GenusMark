import React from 'react'

const scrollingNav = () => {
  return (
    <>

      <nav>
        <ul className='flex gap-2 px-3 mt-4 mb-4 overflow-x-auto overflow-y-hidden sm:justify-center'>
          <li className='text-xs bg-gray-900 text-white text-center flex items-center  justify-center py-2 px-5 rounded-full'>Categories <img className='ml-2' src="./downarrow.png" width={14} alt="" /></li>
          <li className='text-xs bg-gray-900 text-white text-center flex items-center justify-center py-2 px-5 rounded-full'>Hardware</li>
          <li className='text-xs bg-teal-500 text-white text-center flex items-center justify-center py-2 px-5 rounded-full'>Smartphones</li>
          <li className='text-xs bg-teal-500 text-white text-center flex items-center justify-center py-2 px-5 rounded-full'>Automobiles</li>
          <li className='text-xs bg-teal-500 text-white text-center flex items-center justify-center py-2 px-5 rounded-full'>Services</li>
          <li className='text-xs bg-teal-500 text-white text-center flex items-center justify-center py-2 px-5 rounded-full'>Games</li>
        </ul>
      </nav>


    </>
  )
}

export default scrollingNav

