import React from 'react'
import Style from './Footer.module.css'
import logo from '../../assets/imgs/logo.png'
import { useTranslation } from 'react-i18next';

function Footer() {


  const { t } = useTranslation();

  return (
    <>
      <div className="bg-zinc-800 w-full py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-3/4 mx-auto ">
        <div className="col-span-1 ">
            <div className="logo mb-6">
                <img src={logo} alt="" />
            </div>
            <div className="">
                <div className="">
                    <p className='min-h-5 max-w-80'>{t('about_description')}</p>
                </div>
                <div className="icons my-3">
                    <i className="fa-brands fa-twitter text-gray-300 me-3 hover:text-blue-700 duration-300"></i>
                    <i className="fa-brands fa-linkedin text-gray-300 mx-3 hover:text-blue-700 duration-300"></i>
                    <i className="fa-brands fa-facebook text-gray-300 mx-3 hover:text-blue-700 duration-300"></i>
                    <i className="fa-brands fa-instagram text-gray-300 mx-3 hover:text-blue-700 duration-300"></i>
                </div>
                <div className="">
                    <ul className='flex'>
                        <li><i className="fa-solid fa-square rotate-45 text-lg me-2 text-gray-300"></i></li>
                        <li><i className="fa-solid fa-square rotate-45 text-lg mx-2 text-gray-300"></i></li>
                        <li><i className="fa-solid fa-square rotate-45 text-lg mx-2 text-gray-300"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-span-1 ">
            <div className="">
                <h1 className='mb-6'>{t('contact_us')}</h1>
                <table className="w-full text-left border-separate" style={{ borderSpacing: '0 15px' }}>
                    <tbody>
                        <tr className="align-top">
                            <td className="align-top w-10">
                                <i className="fa-solid fa-location-dot text-gray-300 mx-3 hover:text-blue-700 duration-300"></i>
                            </td>
                            <td className="text-start">
                                3050 Universal Blvd #190 Fort Lauderdale, FL, 33331, Sydney New York City
                            </td>
                        </tr>
                        <tr className="align-top">
                            <td className="align-top w-10">
                                <i className="fa-solid fa-envelope text-gray-300 mx-3 hover:text-blue-700 duration-300"></i>
                            </td>
                            <td className="text-start">
                                susislibrary@domain.com
                            </td>
                        </tr>
                        <tr className="align-top">
                            <td className="align-top w-10">
                                <i className="fa-solid fa-phone text-gray-300 mx-3 hover:text-blue-700 duration-300"></i>
                            </td>
                            <td className="text-start">
                                +62 582 528 527 21
                            </td>
                        </tr>
                        <tr className="align-top">
                            <td className="align-top w-10">
                                <i className="fa-solid fa-globe text-gray-300 mx-3 hover:text-blue-700 duration-300"></i>
                            </td>
                            <td className="text-start">
                                www.susislibrary.com
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col-span-1  ">
            <h1 className='mb-6'>{t('useful_links')}</h1>
            <div className="">
                <ul className='cursor-pointer'>
                    <li className="my-4 group">
                        <i className="fa-solid fa-square text-white hover:ms-3 group-hover:text-amber-500 group-hover:rotate-45 text-xs mx-3 transition-all  duration-300 ease-out "></i>
                        <span className="group-hover:text-amber-500 group-hover:ms-1 transition-all  duration-300 ease-out">
                            {t('customer_service')}
                        </span>
                    </li>
                    <li className="my-4 group">
                        <i className="fa-solid fa-square text-white hover:ms-3 group-hover:text-amber-500 group-hover:rotate-45 text-xs mx-3 transition-all  duration-300 ease-out "></i>
                        <span className="group-hover:text-amber-500 group-hover:ms-1 transition-all  duration-300 ease-out">
                            {t('help_desk')}
                        </span>
                    </li>
                    <li className="my-4 group">
                        <i className="fa-solid fa-square text-white hover:ms-3 group-hover:text-amber-500 group-hover:rotate-45 text-xs mx-3 transition-all  duration-300 ease-out "></i>
                        <span className="group-hover:text-amber-500 group-hover:ms-1 transition-all  duration-300 ease-out">
                            {t('forum')}
                        </span>
                    </li>
                    <li className="my-4 group">
                        <i className="fa-solid fa-square text-white hover:ms-3 group-hover:text-amber-500 group-hover:rotate-45 text-xs mx-3 transition-all  duration-300 ease-out "></i>
                        <span className="group-hover:text-amber-500 group-hover:ms-1 transition-all  duration-300 ease-out">
                            {t('staff_profile')}
                        </span>
                    </li>
                    <li className="my-4 group">
                        <i className="fa-solid fa-square text-white hover:ms-3 group-hover:text-amber-500 group-hover:rotate-45 text-xs mx-3 transition-all  duration-300 ease-out "></i>
                        <span className="group-hover:text-amber-500 group-hover:ms-1 transition-all  duration-300 ease-out">
                            {t('live_chat')}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>


    </>
  )
}

export default Footer
