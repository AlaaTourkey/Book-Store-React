import React from 'react'
import img1 from '../../assets/imgs/home.png'
import slider1 from '../../assets/imgs/featured-logo1.svg'
import slider2 from '../../assets/imgs/featured-logo2.svg'
import slider3 from '../../assets/imgs/featured-logo3.svg'
import slider4 from '../../assets/imgs/featured-logo4.svg'
import slider5 from '../../assets/imgs/featured-logo5.svg'
import Slider from "react-slick";

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
  return (
    <>
      <section>
        <div class="grid grid-cols-2 grid-flow-col gap-2 ">
          <div className="p-7 w-full ">
            <h1 className='font-normal text-8xl py-10 text-white'>The Sons of the Empire</h1>
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

      <section className='bg-blue-100 my-28 text-center'>
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
    </>
  )
}

export default Home