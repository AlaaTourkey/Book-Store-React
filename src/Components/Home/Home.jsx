import React, { useState } from 'react'
import slider1 from '../../assets/imgs/featured-logo1.svg'
import slider2 from '../../assets/imgs/featured-logo2.svg'
import slider3 from '../../assets/imgs/featured-logo3.svg'
import slider4 from '../../assets/imgs/featured-logo4.svg'
import slider5 from '../../assets/imgs/featured-logo5.svg'
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

function Home() {

  // // for home slider
  // var settings = {
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 500,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   arrows: false,
  // };

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
      {/* home section */}
      <section className='home flex justify-center items-center text-white'>
        <div className=" ">
          <div className="p-4 w-4/5">
            <h1 className='font-normal text-5xl md:text-8xl  py-10 text-amber-400'>The Sons of the Empire</h1>
            <p className='md:text-lg   mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorum. Est commodi excepturi eaque a id nobis architecto pariatur, ipsam minus fugit autem repellat corrupti ad praesentium facilis velit totam.</p>
            <button className="flex items-center my-9   text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs px-2.5 md:px-5  md:py-2.5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <span className=" font-medium">Read More </span>
              <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>


      {/* about section */}
      <section className='about   bg-gray-100'>
        <div className="w-3/4 mx-auto mb,-5 p-2 ">
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
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 relative">
            <div className=" sm:col-span-2 ">
              <div className=" my-6">
                <i className="fa-solid text-amber-400 fa-square rotate-45 mx-1"></i>
                <i className="fa-solid text-amber-400 fa-square rotate-45 mx-1"></i>
                <i className="fa-solid text-amber-400 fa-square rotate-45 mx-1"></i>
                <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies eros pellentesque eros interdum, a efficitur tellus malesuada. Nunc non metus quis elit dictum ultricies. Quisque ultricies aliquam arcu.</p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="">
                  <div className="flex justify-start items-center">
                    <i className="fa-regular fa-address-card text-2xl text-blue-700"></i>
                    <div className="w-16 h-px bg-blue-700 mx-2"></div>
                  </div>
                  <h3>Member Card</h3>
                  <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Nullam ultricies eros pellentesque</p>
                </div>
                <div className="">
                  <div className="flex justify-start items-center">
                    <i className="fa-solid fa-medal text-2xl text-blue-700"></i>
                    <div className="w-16 h-px bg-blue-700 mx-2"></div>
                  </div>
                  <h3>Member Card</h3>
                  <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Nullam ultricies eros pellentesque</p>
                </div>
                <div className="">
                  <div className="flex justify-start items-center">
                    <i className="fa-solid fa-book text-2xl text-blue-700"></i>
                    <div className="w-16 h-px bg-blue-700 mx-2"></div>
                  </div>
                  <h3>Member Card</h3>
                  <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Nullam ultricies eros pellentesque</p>
                </div>
                <div className="">
                  <div className="flex justify-start items-center">
                    <i className="fa-solid fa-book-open-reader text-2xl text-blue-700"></i>
                    <div className="w-16 h-px bg-blue-700 mx-2"></div>
                  </div>
                  <h3>Member Card</h3>
                  <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Nullam ultricies eros pellentesque</p>
                </div>

              </div>
            </div>
            <div className="  mt-10 wow animate__animated animate__fadeInRight">
              <Slider {...settings2}>
                <div className='text-center' >
                  <img className='w-full' src={aboutImg1} alt="" />
                </div>
                <div className='text-center' >
                  <img className='w-full' src={aboutImg2} alt="" />
                </div>
                <div className='text-center' >
                  <img className='w-full' src={aboutImg3} alt="" />
                </div>
                <div className='text-center' >
                  <img className='w-full' src={aboutImg4} alt="" />
                </div>
                <div className='text-center' >
                  <img className='w-full' src={aboutImg5} alt="" />
                </div>
                <div className='text-center' >
                  <img className='w-full' src={aboutImg6} alt="" />
                </div>


              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Category section */}
      <section className='category  container w-3/4 mx-auto  p-5 '>
        <div className="text-center md:w-1/2 w-3/4 m-auto my-7 ">
          <h2 className='text-5xl my-2 '>our <span className='font-bold'>Category</span></h2>
          {/* line after header */}
          <div className="bg-blue-700 h-px w-auto m-auto relative my-6 ">
            <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
              <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-blue-700"></i></li>
              <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-blue-700"></i></li>
            </ul>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae est Sed non eros elementum nulla sodales ullamcorper.</p>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-3 text-center overflow-hidden">
          <div className="card wow animate__animated animate__slideInLeft  h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-indigo-500 hover:shadow-2xl hover:-translate-y-3 duration-300">
            <div className="h-44 flex justify-center items-center">
              <div className="w-1/2 h-1/2 bg-blue-500 rotate-45 rounded-md flex items-center justify-center">
                <i className="fa-solid fa-atom text-2xl text-white -rotate-45"></i>
              </div>
            </div>
            {/* line after header */}
            <div className="bg-gray-400 h-px w-auto m-auto relative my-6 ">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-400"></i></li>
              </ul>
            </div>
            <div className="">
              <Link to='/categories' >
                <button className='hover:bg-blue-500 hover:text-white transition duration-300 py-2 px-4 my-2'>Fiction</button>
              </Link>
            </div>
          </div>
          <div className="card wow animate__animated animate__slideInLeft  h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-pink-600 hover:shadow-2xl hover:-translate-y-3 duration-300">
            <div className="h-44 flex justify-center items-center">
              <div className="w-1/2 h-1/2 bg-pink-600 rotate-45 rounded-md flex items-center justify-center">
                <i className="fa-solid fa-landmark text-2xl text-white -rotate-45"></i>
              </div>
            </div>
            {/* line after header */}
            <div className="bg-gray-400 h-px w-auto m-auto relative my-6 ">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-400"></i></li>
              </ul>
            </div>
            <div className="">
              <Link to='/categories' >
                <button className='hover:bg-pink-600 hover:text-white transition duration-300 py-2 px-4 my-2'>Politics</button>
              </Link>
            </div>
          </div>
          <div className="card wow animate__animated animate__slideInLeft  h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-3 duration-300">
            <div className="h-44 flex justify-center items-center">
              <div className="w-1/2 h-1/2 bg-yellow-400 rotate-45 rounded-md flex items-center justify-center">
                <i className="fa-solid fa-flask-vial text-2xl text-white -rotate-45"></i>
              </div>
            </div>
            {/* line after header */}
            <div className="bg-gray-400 h-px w-auto m-auto relative my-6 ">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-400"></i></li>
              </ul>
            </div>
            <div className="">
              <Link to='/categories'>
                <button className='hover:bg-yellow-400 hover:text-white transition duration-300 py-2 px-4 my-2'>Science</button>
              </Link>
            </div>
          </div>
          <div className="card wow animate__animated animate__slideInLeft h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-green-600 hover:shadow-2xl hover:-translate-y-3 duration-300">
            <div className="h-44 flex justify-center items-center">
              <div className="w-1/2 h-1/2 bg-green-600 rotate-45 rounded-md flex items-center justify-center">
                <i className="fa-solid fa-business-time text-2xl text-white -rotate-45" ></i>
              </div>
            </div>
            {/* line after header */}
            <div className="bg-gray-400 h-px w-auto m-auto relative my-6 ">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-400"></i></li>
              </ul>
            </div>
            <div className="">
              <Link to='/categories'>
                <button className='hover:bg-green-600 hover:text-white transition duration-300 py-2 px-4 my-2'>Business</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to='/categories' >
            <button className='bg-blue-600 hover:bg-blue-700 text-white transition duration-300 py-3 px-12 my-10 rounded-md '>See More</button>
          </Link>
        </div>
      </section>

      {/* slider in home page */}
      {/* <section className='shadow-lg shadow-gray-100 bg-gray-100 text-center py-10 '>
        <Slider {...settings}>
          <div className='text-center' >
            <img className='m-auto' src={slider1} alt="slider image" />
          </div>
          <div>
            <img className='m-auto' src={slider2} alt="slider image" />
          </div>
          <div>
            <img className='m-auto' src={slider3} alt="slider image" />
          </div>
          <div>
            <img className='m-auto' src={slider4} alt="slider image" />
          </div>
          <div>
            <img className='m-auto' src={slider5} alt="slider image" />
          </div>

        </Slider>
      </section> */}


      {/* slider */}
      <PopularBooks />

      {/* team section */}
      <section>
        <div className="team container w-3/4 mx-auto my-2 p-5 ">
          <div className="text-center md:w-1/2 w-3/4 m-auto my-7 ">
            <h2 className='text-5xl my-2 '>Meet Our  <span className='font-bold'>Staff</span></h2>
            {/* line after header */}
            <div className="bg-blue-700 h-px w-auto m-auto relative my-6 ">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-blue-700"></i></li>
                <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-blue-700"></i></li>
              </ul>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae est Sed non eros elementum nulla sodales ullamcorper.</p>
          </div>
          <div className="">
            <div className="slider-container text-center gap-3">
              <Slider {...settings3}>
                <div>
                  <div className="card mx-3 border-2 border-gray-300 rounded-md p-4  hover:shadow-2xl duration-300">
                    <div className=" relative flex items-center justify-center">
                      <img className='w-full ' src={aboutImg1} alt="" />
                      <div className="absolute inset-0 bg-yellow-400 bg-opacity-75 flex flex-col justify-center items-center opacity-0 hover:opacity-100 duration-300">
                        <Link to='/search' >
                          <button className='hover:bg-gray-300 bg-white  transition duration-300 py-2 px-4 '>See More</button>
                        </Link>
                      </div>
                    </div>
                    {/* line after header */}
                    <div className="bg-gray-400 h-px w-auto m-auto relative my-4 ">
                      <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                        <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-400"></i></li>
                      </ul>
                    </div>
                    <div className="">
                      <h3 className=' my-1'>Steven William</h3>
                      <p className=' px-4 '>Director</p>
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
                  <div className="card  mx-3 border-2 border-gray-300 rounded-md p-4  hover:shadow-2xl duration-300">
                    <div className="">
                      <h3 className=' my-1'>Steven William</h3>
                      <p className=' px-4 '>Librarian</p>
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
                        <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-400"></i></li>
                      </ul>
                    </div>
                    <div className=" relative flex items-center justify-center">
                      <img className='w-full ' src={aboutImg2} alt="" />
                      <div className="absolute inset-0 bg-yellow-400 bg-opacity-75 flex flex-col justify-center items-center opacity-0 hover:opacity-100 duration-300">
                        <Link to='/search' >
                          <button className='hover:bg-gray-300 bg-white  transition duration-300 py-2 px-4 '>See More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="card mx-3 border-2 border-gray-300 rounded-md p-4  hover:shadow-2xl duration-300">
                    <div className=" relative flex items-center justify-center">
                      <img className='w-full ' src={aboutImg3} alt="" />
                      <div className="absolute inset-0 bg-yellow-400 bg-opacity-75 flex flex-col justify-center items-center opacity-0 hover:opacity-100 duration-300">
                        <Link to='/search' >
                          <button className='hover:bg-gray-300 bg-white  transition duration-300 py-2 px-4 '>See More</button>
                        </Link>
                      </div>
                    </div>
                    {/* line after header */}
                    <div className="bg-gray-400 h-px w-auto m-auto relative my-4 ">
                      <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                        <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-400"></i></li>
                      </ul>
                    </div>
                    <div className="">
                      <h3 className=' my-1'>Steven William</h3>
                      <p className=' px-4 '>Librarian</p>
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
                  <div className="card  mx-3 border-2 border-gray-300 rounded-md p-4  hover:shadow-2xl duration-300">
                    <div className="">
                      <h3 className=' my-1'>Steven William</h3>
                      <p className=' px-4 '>Director</p>
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
                        <li><i className="fa-solid fa-square rotate-45  text-xs mx-1 text-gray-400"></i></li>
                      </ul>
                    </div>
                    <div className=" relative flex items-center justify-center">
                      <img className='w-full ' src={aboutImg4} alt="" />
                      <div className="absolute inset-0 bg-yellow-400 bg-opacity-75 flex flex-col justify-center items-center opacity-0 hover:opacity-100 duration-300">

                        <Link to='/search' >
                          <button className='hover:bg-gray-300 bg-white  transition duration-300 py-2 px-4 '>See More</button>
                        </Link>
                      </div>
                    </div >
                  </div >
                </div >

              </Slider >
            </div >
          </div >

        </div>
      </section>


      {/* Events */}
      <section className='events bg-gray-100 '>
        <div className="container w-full md:w-3/4 mx-auto p-5">

          <div className="text-center md:w-3/4 w-4/5 m-auto my-7">
            <h2 className='text-5xl my-2'>Upcoming  <span className='font-bold'>Events</span></h2>
            {/* line after header */}
            <div className="bg-blue-700 h-px w-auto m-auto relative my-6">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-xs mx-1"></i></li>
                <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-xs mx-1"></i></li>
              </ul>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida, quam vitae est Sed non eros elementum nulla sodales ullamcorper.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-1 hidden lg:block">
              <img className='wow animate__animated animate__slideInLeft w-3/4' src={eventImg} alt="" />
            </div>
            <div className="col-span-3 lg:col-span-2  ">
              <div className="grid grid-rows-2 grid-flow-col gap-6 overflow-hidden wow animate__animated animate__slideInRight">
                <div>
                  <h4 className="head-icon relative px-4 font-bold text-gray-700 text-lg leading-5">September 15, 2017 <span className='float-right font-bold text-lg leading-5'>08.30 Am</span></h4>
                  <div className="grid grid-cols-3 bg-white p-2 my-4 border border-gray-200 shadow-sm rounded-md">
                    <div className="col-span-1 ">
                      <img className='w-4/5  ' src={eventImg2} alt="" />
                    </div>
                    <div className="col-span-2 ps-1 my-5">
                      <h2 className='font-bold text-xl mb-5'> Read Book For 500 People</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt possimus eveniet quod beatae sint cupiditate inventore alias expedita nihil soluta.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="head-icon relative px-4 font-bold text-gray-700 text-lg leading-5">July 20, 2017 <span className='float-right font-bold text-lg leading-5'>02.30 Am</span></h4>
                  <div className="grid grid-cols-3 bg-white p-2 my-4 border border-gray-200 shadow-sm rounded-md">
                    <div className="col-span-1">
                      <img className='w-4/5 ' src={eventImg3} alt="" />
                    </div>
                    <div className="col-span-2 px-3 my-5">
                      <h2 className='font-bold text-xl mb-5'>Tuesday Networking & Lecture</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt possimus eveniet quod beatae sint cupiditate inventore alias expedita nihil soluta.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>




      {/* People Say */}
      <section className=''>
        <div className=" people  text-white py-5  ">
          <div className="text-center md:w-1/2 w-3/4 m-auto my-7 ">
            <h2 className='text-5xl my-2 '>What People <span className='font-bold'>Say</span></h2>
            {/* line after header */}
            <div className="bg-white h-px w-auto m-auto relative my-6 ">
              <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-white"></i></li>
                <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-white"></i></li>
              </ul>
            </div>
          </div>
          <div className="slider-container w-3/4 m-auto text-center ">
            <Slider {...settings4}>
              <div>
                <div className=" my-5 py-3">
                  <h5>Ariana Grande</h5>
                  <span>Student</span>
                  <p className='my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam omnis sunt suscipit impedit quasi, totam id facilis, sapiente quae animi iusto at magnam? Molestias incidunt quia consequatur error officia vitae?</p>
                  <img className='w-20 h-20  border-4 border-white rounded-full m-auto' src={aboutImg1} alt="" />
                </div>
              </div>
              <div>
                <div className=" my-5 py-3">
                  <h5>Ariana Grande</h5>
                  <span>Student</span>
                  <p className='my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam omnis sunt suscipit impedit quasi, totam id facilis, sapiente quae animi iusto at magnam? Molestias incidunt quia consequatur error officia vitae?</p>
                  <img className='w-20 h-20  border-4 border-white rounded-full m-auto' src={aboutImg3} alt="" />
                </div>
              </div>
              <div>
                <div className=" my-5 py-3">
                  <h5>Ariana Grande</h5>
                  <span>Student</span>
                  <p className='my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam omnis sunt suscipit impedit quasi, totam id facilis, sapiente quae animi iusto at magnam? Molestias incidunt quia consequatur error officia vitae?</p>
                  <img className='w-20 h-20  border-4 border-white rounded-full m-auto' src={aboutImg5} alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Lets Take Your Book */}

      <section className=' Take   bg-blue-700  p-4 text-white relative'>
        <div className="container w-4/5  m-auto">
          <div className="grid md:grid-cols-3 grid-cols-2  gap-9">
            <div className="col-span-2">
              <div className=" mb-16">
                <h2 className='text-4xl my-12'>Lets Take  <span className='font-bold'>Your Book</span></h2>
                {/* line after header */}
                <div className="bg-white h-px  min-w-12 w-80  relative my-3">
                  <ul className='absolute top-0 left-0 transform -translate-x-2 -translate-y-1/2 flex'>
                    <li><i className="fa-solid fa-square text-white rotate-45 text-sm mx-1"></i></li>
                    <li><i className="fa-solid fa-square text-white rotate-45 text-sm mx-1"></i></li>
                  </ul>
                </div>
              </div>

              <div >
                <form  >
                  <div className="className='grid md:grid-cols-2 gap-2">
                    <div className="my-2">
                      <label htmlFor="name" className='block font-bold my-1'>Name</label>
                      <input type="text" id='name' placeholder='Enter your name...' />
                    </div>
                    <div className=" my-2">
                      <label htmlFor="Email" className='block font-bold my-1'>Email</label>
                      <input type="text" id='Email' placeholder='Enter your email...' />
                    </div>
                  </div>
                  <button className='accoutBtn'>Create Accout </button>
                </form>
              </div>
            </div>
            <div className="col-span-1 hidden md:block absolute bottom-0 right-10">
              <img className='wow animate__animated animate__slideInRight w-72  lg:w-4/5   ' src={takeImg} alt="" />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home