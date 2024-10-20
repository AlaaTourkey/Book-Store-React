import React, { useContext, useEffect, useState } from 'react'
import Slider from "react-slick";
import aboutImg1 from '../../assets/imgs/slide1.jpg'
import aboutImg2 from '../../assets/imgs/slide2.jpg'
import aboutImg3 from '../../assets/imgs/slide3.jpg'
import aboutImg4 from '../../assets/imgs/slide4.jpg'
import aboutImg5 from '../../assets/imgs/slide5.jpg'
import aboutImg6 from '../../assets/imgs/slide6.jpg'
import eventImg from '../../assets/imgs/event.png'
import eventImg2 from '../../assets/imgs/even-1.jpg'
import eventImg3 from '../../assets/imgs/event-2.jpg'
import takeImg from '../../assets/imgs/outer-image.png'
import { Link } from 'react-router-dom'
import PopularBooks from '../PopularBooks/PopularBooks'
import { useTranslation } from 'react-i18next';
import { DarkModeContext } from '../context/DarkModeContext'

function Home() {

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { t } = useTranslation();

  if (!toggleDarkMode) {
    console.error('DarkModeContext is not available. Make sure the component is wrapped with DarkModeProvider.');
    return null;
  }

  
  //  for about slider
  var settings2 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
  };

  // for team slider
  const settings3 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
  };

  // for people slider
  const settings4 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div >
        {/* home section */}
        <section className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-white'} home  flex justify-center items-center `}>
          <div className="">
            <div className="p-4 w-4/5">
              <h1 className='font-normal text-5xl md:text-8xl py-10 text-amber-400'>
                {t("The Sons of the Empire")}
              </h1>
              <p className='md:text-lg mt-2'>
                {t("home_description")} {/* Make sure to add this key in your translation files */}
              </p>
              <button className="flex items-center my-9 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs px-2.5 md:px-5 md:py-2.5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <span className="font-medium">{t("Read More")}</span>
                <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </section>

        {/* about section */}
        <section className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}  about bg-gray-100`}>
          <div className="w-3/4 mx-auto mb,-5 p-2 ">
            <div className="text-center w-3/4 md:w-1/2 m-auto my-7">
              <h2 className='text-5xl my-2'>{t('about')} <span className='font-bold'>{t('us')}</span></h2>
              {/* line after header */}
              <div className="bg-blue-700 h-px w-auto m-auto relative my-6">
                <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                  <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-xs mx-1"></i></li>
                  <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-xs mx-1"></i></li>
                </ul>
              </div>
              <p>{t('about_description')}</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 relative">
              <div className="sm:col-span-2">
                <div className="my-6">
                  <i className="fa-solid text-amber-400 fa-square rotate-45 mx-1"></i>
                  <i className="fa-solid text-amber-400 fa-square rotate-45 mx-1"></i>
                  <i className="fa-solid text-amber-400 fa-square rotate-45 mx-1"></i>
                  <p className='mt-6'>{t('about_detail')}</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="">
                    <div className="flex justify-start items-center">
                      <i className="fa-regular fa-address-card text-2xl text-blue-700"></i>
                      <div className="w-16 h-px bg-blue-700 mx-2"></div>
                    </div>
                    <h3>{t('member_card')}</h3>
                    <p>{t('member_card_description')}</p>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center">
                      <i className="fa-solid fa-medal text-2xl text-blue-700"></i>
                      <div className="w-16 h-px bg-blue-700 mx-2"></div>
                    </div>
                    <h3>{t('member_benefits')}</h3>
                    <p>{t('member_benefits_description')}</p>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center">
                      <i className="fa-solid fa-book text-2xl text-blue-700"></i>
                      <div className="w-16 h-px bg-blue-700 mx-2"></div>
                    </div>
                    <h3>{t('book_loan')}</h3>
                    <p>{t('book_loan_description')}</p>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center">
                      <i className="fa-solid fa-book-open-reader text-2xl text-blue-700"></i>
                      <div className="w-16 h-px bg-blue-700 mx-2"></div>
                    </div>
                    <h3>{t('reading_sessions')}</h3>
                    <p>{t('reading_sessions_description')}</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 wow animate__animated animate__fadeInLeft    ">
                <Slider {...settings2}>
                  <div className='text-center'>
                    <img className='w-full' src={aboutImg1} alt="" />
                  </div>
                  <div className='text-center'>
                    <img className='w-full' src={aboutImg2} alt="" />
                  </div>
                  <div className='text-center'>
                    <img className='w-full' src={aboutImg3} alt="" />
                  </div>
                  <div className='text-center'>
                    <img className='w-full' src={aboutImg4} alt="" />
                  </div>
                  <div className='text-center'>
                    <img className='w-full' src={aboutImg5} alt="" />
                  </div>
                  <div className='text-center'>
                    <img className='w-full' src={aboutImg6} alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>

        {/* Category section */}
        <section className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}  category `} >
          <div className="container w-3/4 mx-auto p-5">

            <div className="text-center md:w-1/2 w-3/4 m-auto my-7 ">
              <h2 className='text-5xl my-2 '>{t('our')} <span className='font-bold'>{t('category')}</span></h2>
              {/* line after header */}
              <div className="bg-blue-700 h-px w-auto m-auto relative my-6 ">
                <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                  <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-blue-700"></i></li>
                  <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-blue-700"></i></li>
                </ul>
              </div>
              <p>{t('category_description')}</p>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-3 text-center overflow-hidden">
              <div className="card wow animate__animated animate__bounce  animate__delay-1s h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-indigo-500 hover:shadow-2xl hover:-translate-y-3 duration-300">
                <div className="h-44 flex justify-center items-center">
                  <div className="w-1/2 h-1/2 bg-blue-500 rotate-45 rounded-md flex items-center justify-center">
                    <i className="fa-solid fa-atom text-2xl text-white -rotate-45"></i>
                  </div>
                </div>
                {/* line after header */}
                <div className="bg-gray-400 h-px w-auto m-auto relative my-6 ">
                  <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                    <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-gray-400"></i></li>
                  </ul>
                </div>
                <div className="">
                  <Link to='/categories'>
                    <button className='hover:bg-blue-500 hover:text-white transition duration-300 py-2 px-4 my-2'>{t('fiction')}</button>
                  </Link>
                </div>
              </div>
              <div className="card wow animate__animated animate__slideInLeft h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-pink-600 hover:shadow-2xl hover:-translate-y-3 duration-300">
                <div className="h-44 flex justify-center items-center">
                  <div className="w-1/2 h-1/2 bg-pink-600 rotate-45 rounded-md flex items-center justify-center">
                    <i className="fa-solid fa-landmark text-2xl text-white -rotate-45"></i>
                  </div>
                </div>
                {/* line after header */}
                <div className="bg-gray-400 h-px w-auto m-auto relative my-6 ">
                  <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                    <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-gray-400"></i></li>
                  </ul>
                </div>
                <div className="">
                  <Link to='/categories'>
                    <button className='hover:bg-pink-600 hover:text-white transition duration-300 py-2 px-4 my-2'>{t('politics')}</button>
                  </Link>
                </div>
              </div>
              <div className="card wow animate__animated animate__slideInLeft h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-3 duration-300">
                <div className="h-44 flex justify-center items-center">
                  <div className="w-1/2 h-1/2 bg-yellow-400 rotate-45 rounded-md flex items-center justify-center">
                    <i className="fa-solid fa-flask-vial text-2xl text-white -rotate-45"></i>
                  </div>
                </div>
                {/* line after header */}
                <div className="bg-gray-400 h-px w-auto m-auto relative my-6 ">
                  <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                    <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-gray-400"></i></li>
                  </ul>
                </div>
                <div className="">
                  <Link to='/categories'>
                    <button className='hover:bg-yellow-400 hover:text-white transition duration-300 py-2 px-4 my-2'>{t('science')}</button>
                  </Link>
                </div>
              </div>
              <div className="card wow animate__animated animate__slideInLeft h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-green-600 hover:shadow-2xl hover:-translate-y-3 duration-300">
                <div className="h-44 flex justify-center items-center">
                  <div className="w-1/2 h-1/2 bg-green-600 rotate-45 rounded-md flex items-center justify-center">
                    <i className="fa-solid fa-business-time text-2xl text-white -rotate-45"></i>
                  </div>
                </div>
                {/* line after header */}
                <div className="bg-gray-400 h-px w-auto m-auto relative my-6 ">
                  <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                    <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-gray-400"></i></li>
                  </ul>
                </div>
                <div className="">
                  <Link to='/categories'>
                    <button className='hover:bg-green-600 hover:text-white transition duration-300 py-2 px-4 my-2'>{t('business')}</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to='/categories'>
                <button className='bg-blue-600 hover:bg-blue-700 text-white transition duration-300 py-3 px-12 my-10 rounded-md'>{t('see_more')}</button>
              </Link>
            </div>

          </div>
        </section>


        {/* slider */}
        <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} `}>
          <PopularBooks />
        </div>

        {/* team section */}
        <section className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
          <div className="team container w-3/4 mx-auto  p-5 ">
            <div className="text-center md:w-1/2 w-3/4 m-auto my-7 ">
              <h2 className='text-5xl my-2 '>{t('meet_our')} <span className='font-bold'>{t('staff')}</span></h2>
              {/* line after header */}
              <div className="bg-blue-700 h-px w-auto m-auto relative my-6 ">
                <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                  <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-blue-700"></i></li>
                  <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-blue-700"></i></li>
                </ul>
              </div>
              <p>{t('staff_description')}</p>
            </div>
            <div className="">
              <div className="slider-container text-center gap-3">
                <Slider {...settings3}>
                  <div>
                    <div className="card mx-3 border-2 border-gray-300 rounded-md p-4 hover:shadow-2xl duration-300">
                      <div className="relative flex items-center justify-center">
                        <img className='w-full ' src={aboutImg1} alt="" />
                        <div className="absolute inset-0 bg-yellow-400 bg-opacity-75 flex flex-col justify-center items-center opacity-0 hover:opacity-100 duration-300">
                          <Link to='/search'>
                            <button className='hover:bg-gray-300 bg-white transition duration-300 py-2 px-4 '>{t('see_more')}</button>
                          </Link>
                        </div>
                      </div>
                      {/* line after header */}
                      <div className="bg-gray-400 h-px w-auto m-auto relative my-4 ">
                        <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                          <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-gray-400"></i></li>
                        </ul>
                      </div>
                      <div className="">
                        <h3 className='my-1'>Steven William</h3>
                        <p className='px-4'>{t('director')}</p>
                      </div>
                      <div className="icons">
                        <i className="fa-brands fa-twitter text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-linkedin text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-facebook text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-instagram text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card mx-3 border-2 border-gray-300 rounded-md p-4 hover:shadow-2xl duration-300">
                      <div className="">
                        <h3 className='my-1'>Steven William</h3>
                        <p className='px-4'>{t('librarian')}</p>
                      </div>
                      <div className="icons">
                        <i className="fa-brands fa-twitter text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-linkedin text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-facebook text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-instagram text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                      </div>
                      {/* line after header */}
                      <div className="bg-gray-400 h-px w-auto m-auto relative my-4 ">
                        <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                          <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-gray-400"></i></li>
                        </ul>
                      </div>
                      <div className="relative flex items-center justify-center">
                        <img className='w-full ' src={aboutImg2} alt="" />
                        <div className="absolute inset-0 bg-yellow-400 bg-opacity-75 flex flex-col justify-center items-center opacity-0 hover:opacity-100 duration-300">
                          <Link to='/search'>
                            <button className='hover:bg-gray-300 bg-white transition duration-300 py-2 px-4 '>{t('see_more')}</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="card mx-3 border-2 border-gray-300 rounded-md p-4 hover:shadow-2xl duration-300">
                      <div className="relative flex items-center justify-center">
                        <img className='w-full ' src={aboutImg3} alt="" />
                        <div className="absolute inset-0 bg-yellow-400 bg-opacity-75 flex flex-col justify-center items-center opacity-0 hover:opacity-100 duration-300">
                          <Link to='/search'>
                            <button className='hover:bg-gray-300 bg-white transition duration-300 py-2 px-4 '>{t('see_more')}</button>
                          </Link>
                        </div>
                      </div>
                      {/* line after header */}
                      <div className="bg-gray-400 h-px w-auto m-auto relative my-4 ">
                        <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                          <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-gray-400"></i></li>
                        </ul>
                      </div>
                      <div className="">
                        <h3 className='my-1'>Steven William</h3>
                        <p className='px-4'>{t('librarian')}</p>
                      </div>
                      <div className="icons">
                        <i className="fa-brands fa-twitter text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-linkedin text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-facebook text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-instagram text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card mx-3 border-2 border-gray-300 rounded-md p-4 hover:shadow-2xl duration-300">
                      <div className="">
                        <h3 className='my-1'>Steven William</h3>
                        <p className='px-4'>{t('director')}</p>
                      </div>
                      <div className="icons">
                        <i className="fa-brands fa-twitter text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-linkedin text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-facebook text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                        <i className="fa-brands fa-instagram text-gray-500 mx-1 hover:text-blue-700 duration-300"></i>
                      </div>
                      {/* line after header */}
                      <div className="bg-gray-400 h-px w-auto m-auto relative my-4 ">
                        <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                          <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-gray-400"></i></li>
                        </ul>
                      </div>
                      <div className="relative flex items-center justify-center">
                        <img className='w-full ' src={aboutImg4} alt="" />
                        <div className="absolute inset-0 bg-yellow-400 bg-opacity-75 flex flex-col justify-center items-center opacity-0 hover:opacity-100 duration-300">
                          <Link to='/search'>
                            <button className='hover:bg-gray-300 bg-white transition duration-300 py-2 px-4 '>{t('see_more')}</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>



        {/* Events */}
        <section className={` ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}events `}>
          <div className="container w-full md:w-3/4 mx-auto p-5">
            <div className={` ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} text-center md:w-3/4 w-4/5 m-auto my-7`}>
              <h2 className='text-5xl my-2'>{t('upcoming')} <span className='font-bold'>{t('events')}</span></h2>
              <div className="bg-blue-700 h-px w-auto m-auto relative my-6">
                <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                  <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-xs mx-1"></i></li>
                  <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-xs mx-1"></i></li>
                </ul>
              </div>
              <p>{t('events_description')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-1 hidden lg:block">
                <img className=' animate__animated animate__slideInLeft w-3/4' src={eventImg} alt="" />
              </div>
              <div className="col-span-3 lg:col-span-2">
                <div className="grid grid-rows-2 grid-flow-col gap-6 overflow-hidden wow animate__animated animate__slideInRight">
                  <div>
                    <h4 className="head-icon relative px-4 font-bold text-gray-700 text-lg leading-5">
                      {t('event_date_time_1')}
                      <span className='float-right font-bold text-lg leading-5'>{t('event_time_1')}</span>
                    </h4>
                    <div className={` ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} grid grid-cols-3  p-2 my-4 border border-gray-200 shadow-sm rounded-md`}>
                      <div className="col-span-1 ">
                        <img className='w-4/5' src={eventImg2} alt="" />
                      </div>
                      <div className="col-span-2 ps-1 my-5">
                        <h2 className='font-extrabold text-xl mb-5'>{t('event_title_1')}</h2>
                        <p>{t('event_description_1')}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="head-icon relative px-4 font-bold text-gray-700 text-lg leading-5">
                      {t('event_date_time_2')}
                      <span className='float-right font-bold text-lg leading-5'>{t('event_time_2')}</span>
                    </h4>
                    <div className={` ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} grid grid-cols-3  p-2 my-4 border border-gray-200 shadow-sm rounded-md`}>
                      <div className="col-span-1">
                        <img className='w-4/5' src={eventImg3} alt="" />
                      </div>
                      <div className="col-span-2 px-3 my-5">
                        <h2 className='font-extrabold text-xl mb-5'>{t('event_title_2')}</h2>
                        <p>{t('event_description_2')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* People Say */}
        <section className='  '>
          <div className="people text-white py-5">
            <div className="text-center md:w-1/2 w-3/4 m-auto my-7">
              <h2 className='text-5xl my-2'>{t('what_people')} <span className='font-bold'>{t('say')}</span></h2>
              {/* line after header */}
              <div className="bg-white h-px w-auto m-auto relative my-6">
                <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                  <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-white"></i></li>
                  <li><i className="fa-solid fa-square rotate-45 text-xs mx-1 text-white"></i></li>
                </ul>
              </div>
            </div>
            <div className="slider-container w-3/4 m-auto text-center">
              <Slider {...settings4}>
                <div>
                  <div className="my-5 py-3">
                    <h5>{t('person_name_1')}</h5>
                    <span>{t('role_student')}</span>
                    <p className='my-5'>{t('testimonial_1')}</p>
                    <img className='w-20 h-20 border-4 border-white rounded-full m-auto' src={aboutImg1} alt={t('person_name_1')} />
                  </div>
                </div>
                <div>
                  <div className="my-5 py-3">
                    <h5>{t('person_name_2')}</h5>
                    <span>{t('role_student')}</span>
                    <p className='my-5'>{t('testimonial_2')}</p>
                    <img className='w-20 h-20 border-4 border-white rounded-full m-auto' src={aboutImg3} alt={t('person_name_2')} />
                  </div>
                </div>
                <div>
                  <div className="my-5 py-3">
                    <h5>{t('person_name_3')}</h5>
                    <span>{t('role_student')}</span>
                    <p className='my-5'>{t('testimonial_3')}</p>
                    <img className='w-20 h-20 border-4 border-white rounded-full m-auto' src={aboutImg5} alt={t('person_name_3')} />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>


        {/* Lets Take Your Book */}

        <section className='Take bg-blue-400 p-4 text-white relative'>
          <div className="container w-4/5 m-auto">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-9">
              <div className="col-span-2">
                <div className="mb-16">
                  <h2 className='text-4xl my-12'>{t('lets_take')} <span className='font-bold'>{t('your_book')}</span></h2>
                  {/* line after header */}
                  <div className="bg-white h-px min-w-12 w-80 relative my-3">
                    <ul className='absolute top-0 left-0 transform -translate-x-2 -translate-y-1/2 flex'>
                      <li><i className="fa-solid fa-square text-white rotate-45 text-sm mx-1"></i></li>
                      <li><i className="fa-solid fa-square text-white rotate-45 text-sm mx-1"></i></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <form>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="my-2">
                        <label htmlFor="name" className='block font-bold my-1'>{t('name')}</label>
                        <input type="text" id='name' placeholder={t('enter_your_name')} />
                      </div>
                      <div className="my-2">
                        <label htmlFor="Email" className='block font-bold my-1'>{t('email')}</label>
                        <input type="text" id='Email' placeholder={t('enter_your_email')} />
                      </div>
                    </div>
                    <button className='accoutBtn'>{t('create_account')}</button>
                  </form>
                </div>
              </div>
              <div className="col-span-1 hidden md:block absolute bottom-0 ltr:right-10 rtl:left-10">
                <img className='animate  animate__animated animate__slideInRight w-72 lg:w-4/5' src={takeImg} alt="" />
              </div>
            </div>
          </div>
        </section>


      </div >
    </>
  )
}

export default Home