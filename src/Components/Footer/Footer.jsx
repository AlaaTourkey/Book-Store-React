import React from 'react'
import Style from './Footer.module.css'

function Footer() {
  return (
    <>
      <footer className="bg-white shadow mt-4 dark:bg-gray-800 fixed bottom-0 w-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div className="text-center w-3/4 md:w-1/2 m-auto my-7">
            <h2 className='text-5xl my-2'>about <span className='font-bold'>us</span></h2>
            {/* line after header */}
            <div className="bg-blue-700 h-px w-auto m-auto relative my-6">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-xs mx-1"></i></li>
                <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-xs mx-1"></i></li>
              </ul>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae est Sed non eros elementum nulla sodales ullamcorper.</p>
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>

    </>
  )
}

export default Footer
