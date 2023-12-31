import React from 'react'

const footer = () => {
  return (
    <>
    
    <footer className="relative bg-blueGray-200 pt-8 pb-6 bgg">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">
        Let's grab securely!
        </h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
        Explore our thriving marketplace for quality pre-owned items!
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button
            className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <i className="fab fa-twitter" />
          </button>
          <button
            className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <i className="fab fa-facebook-square" />
          </button>
          <button
            className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <i className="fab fa-dribbble" />
          </button>
          <button
            className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <i className="fab fa-github" />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6 gap-5">
          <div className="w-full lg:w-4/12 px-4 ml-auto ">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
              Useful Links
            </span>
            <ul className="list-unstyled">
              <li>
                About Us
              </li>
              <li>
                Blog
              </li>
              <li>
                Github
              </li>
              <li>
                Free Products
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
              Other Resources
            </span>
            <ul className="list-unstyled">
              <li>
                MIT License
              </li>
              <li>
                Terms &amp; Conditions
              </li>
              <li>
                Privacy Policy
              </li>
              <li>
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span>
        </div>
      </div>
    </div>
  </div>
</footer>


    </>
  )
}

export default footer