import React from 'react'
import Style from './Footer.module.css'

function Footer() {
  return (
    <>
      <div className="  mt-4 bg-zinc-800 w-full py-8">
        <div className="grid grid-cols-3 gap-10 w-3/4 mx-auto ">
          <div className="col-span-1">
            <div className="">
              <div className="">
                <p className='min-h-5 max-w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae est Sed non eros elementum nulla sodales ullamcorper.</p>
              </div>
              <div className="icons my-3">
                <i className="fa-brands fa-twitter text-gray-300 me-3 hover:text-blue-700 duration-300"></i>
                <i className="fa-brands fa-linkedin text-gray-300 mx-3 hover:text-blue-700 duration-300"></i>
                <i className="fa-brands fa-facebook text-gray-300 mx-3 hover:text-blue-700 duration-300"></i>
                <i className="fa-brands fa-instagram text-gray-300 mx-3 hover:text-blue-700 duration-300"></i>
              </div>
              <div className="">
                <ul className=' flex'>
                  <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-300"></i></li>
                  <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-300"></i></li>
                  <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-300"></i></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="">
              <h1>Contact Us</h1>
              <table className="w-full  ">
                <tbody>
                  <tr className='align-top'>
                    <td className='align-top'><i className="fa-solid fa-location-dot text-gray-300 mx-3 hover:text-blue-700 duration-300"></i></td>
                    <td className='align-top'>3050 Universal Blvd #190 Fort Lauderdale, FL, 33331, Sydney New York City</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-location-dot text-gray-300 mx-3 hover:text-blue-700 duration-300"></i></td>
                    <td>susislibrary@domain.com</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-location-dot text-gray-300 mx-3 hover:text-blue-700 duration-300"></i></td>
                    <td>+62 582 528 527 21</td>
                  </tr>
                  <tr>
                    <td><i className="fa-solid fa-location-dot text-gray-300 mx-3 hover:text-blue-700 duration-300"></i></td>
                    <td>www.susislibrary.com</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
          <div className="col-span-1">

          </div>
        </div>
      </div>

    </>
  )
}

export default Footer
