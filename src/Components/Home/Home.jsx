import React from 'react'
import img1 from '../../assets/imgs/home.png'
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
import { Link } from 'react-router-dom'

function Home() {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

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
  return (
    <>
      {/* home section */}
      <section>
        <div class="grid grid-cols-2 grid-flow-col gap-2 ">
          <div className="p-7 w-full ">
            <h1 className='font-normal text-8xl py-10 text-amber-400'>The Sons of the Empire</h1>
            <p className='text-lg mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorum. Est commodi excepturi eaque a id nobis architecto pariatur, ipsam minus fugit autem repellat corrupti ad praesentium facilis velit totam.</p>
            <button className="flex items-center my-9 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <button type="button" className=" font-medium">Read More </button>
              <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i>
            </button>
          </div>
          <div>
            <div className="p-5 w-full">
              <img className='w-full' src={img1} alt="home image" />
            </div>
          </div>
        </div>
      </section>

      {/* slider in home page */}
      <section className='bg-blue-100 my-10 text-center'>
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
      </section>


      {/* about section */}

      <section className='about   bg-gray-100'>
        <div className="w-3/4 mx-auto my-5 p-5 ">
          <div className="text-center w-1/2 m-auto my-7">
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
                    <i class="fa-regular fa-address-card text-2xl text-blue-700"></i>
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
                    <i class="fa-solid fa-book text-2xl text-blue-700"></i>
                    <div className="w-16 h-px bg-blue-700 mx-2"></div>
                  </div>
                  <h3>Member Card</h3>
                  <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Nullam ultricies eros pellentesque</p>
                </div>
                <div className="">
                  <div className="flex justify-start items-center">
                    <i class="fa-solid fa-book-open-reader text-2xl text-blue-700"></i>
                    <div className="w-16 h-px bg-blue-700 mx-2"></div>
                  </div>
                  <h3>Member Card</h3>
                  <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Nullam ultricies eros pellentesque</p>
                </div>

              </div>
            </div>
            <div className="  mt-10">
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

      <section className='category  container w-3/4 mx-auto my-5 p-5 '>
        <div className="text-center w-1/2 m-auto my-7 ">
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
          <div className="card h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-indigo-500 hover:shadow-2xl hover:-translate-y-3 duration-300">
            <div className="h-44 flex justify-center items-center">
              <div className="w-1/2 h-1/2 bg-blue-500 rotate-45 rounded-md flex items-center justify-center">
                <i class="fa-solid fa-atom text-2xl text-white -rotate-45"></i>
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
          <div className="card h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-pink-600 hover:shadow-2xl hover:-translate-y-3 duration-300">
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
          <div className="card h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-yellow-400 hover:shadow-2xl hover:-translate-y-3 duration-300">
            <div className="h-44 flex justify-center items-center">
              <div className="w-1/2 h-1/2 bg-yellow-400 rotate-45 rounded-md flex items-center justify-center">
                <i class="fa-solid fa-flask-vial text-2xl text-white -rotate-45"></i>
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
          <div className="card h-80 border-2 border-gray-300 rounded-lg p-4 hover:border-green-600 hover:shadow-2xl hover:-translate-y-3 duration-300">
            <div className="h-44 flex justify-center items-center">
              <div className="w-1/2 h-1/2 bg-green-600 rotate-45 rounded-md flex items-center justify-center">
                <i class="fa-solid fa-business-time text-2xl text-white -rotate-45" ></i>
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












    </>
  )
}

export default Home