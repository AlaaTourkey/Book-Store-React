import React, { useContext, useEffect, useState } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DarkModeContext } from '../context/DarkModeContext';

function PopularBooks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [popular, setPopular] = useState(null);
  const { t } = useTranslation();
  const { isDarkMode } = useContext(DarkModeContext);


  const slides = popular ? popular.map(book => (
    <div key={book.id} className="h-full flex items-center justify-center">
      {book?.volumeInfo?.imageLinks?.thumbnail ? (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-full min-h-60 object-cover" height={250} />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">Image Not Available</div>
      )}
    </div>
  )) : [];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 1,
    speed: 500,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",

        }
      }
    ]
  };

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try { 
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=bestsellers&langRestrict=en&maxResults=10`);
        setPopular(data.items);
      } catch (error) {
        console.error('Error fetching popular books:', error);
      }
    };

    fetchPopularBooks();
  }, []);

  return (
    <>
      {/* popular */}
      <section >
        <div className="py-2 popular">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="popular-bg col-span-1 slider-container flex justify-center items-center py-5 ">
              <div className="w-3/5">
                <Slider className='relative' {...settings}>
                  {slides.map((slide, index) => (
                    <div className='p-2' key={index}>{slide}</div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} col-span-1 p-4 px-8`}>
              <div className="w-1/2">
                <div className="">
                  <h2 className='text-3xl my-2'>{t('popular')} <span className='font-bold'>{t('books')}</span></h2>
                  {/* line after header */}
                  <div className="bg-blue-700 h-px w-auto m-auto relative my-3">
                    <ul className='absolute top-0 left-0 transform -translate-x-2 -translate-y-1/2 flex'>
                      <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-sm mx-1"></i></li>
                      <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-sm mx-1"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="p-2 ">
                  {popular && (
                    <div>
                      <div className="my-2 transition-all duration-500 ease-in-out transform">
                        <h2 className='text-2xl'><i className="fa-solid fa-square rotate-45 text-sm mx-1 text-amber-400"></i> {t('title')} </h2>
                        <p className='px-10 text-lg text-gray-500 font-bold min-h-14'>{popular[currentSlide]?.volumeInfo?.title}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="">
                          <h2 className='text-2xl'><i className="fa-solid fa-square rotate-45 text-sm mx-1 text-amber-400"></i> {t('info')} </h2>
                          <div className="my-2">
                            {popular[currentSlide]?.volumeInfo?.imageLinks?.thumbnail ? (
                              <img className='w-20 h-20 rounded-md border-4 border-amber-400' src={popular[currentSlide]?.volumeInfo?.imageLinks.thumbnail} alt="" />
                            ) : (
                              <div className="w-16 h-16 flex items-center justify-center bg-gray-300">Image Not Available</div>
                            )}
                            <p className='my-3 text-gray-500 min-h-6'>{popular[currentSlide]?.volumeInfo.publisher}</p>
                          </div>
                        </div>
                        <div className="">
                          <h2 className='text-2xl'>{t('pages')}</h2>
                          <p className='my-1 text-xl text-gray-500'>{popular[currentSlide]?.volumeInfo.pageCount} {t('pages_text')}</p>
                        </div>
                      </div>
                      <div className="my-2 max-h-40 min-h-40 ">
                        <h2 className='text-2xl'><i className="fa-solid fa-square rotate-45 text-sm mx-1 text-amber-400"></i> {t('description')} </h2>
                        <p className="text-gray-400 font-light text-2xl">
                          {popular[currentSlide]?.volumeInfo?.description
                            ? popular[currentSlide]?.volumeInfo.description.split(' ').slice(0, 25).join(' ') + '...'
                            : t('description_not_available')}
                        </p>
                      </div>
                      <Link to={`/CardDetails/${popular[currentSlide]?.id}`}>
                        <button className="flex items-center md:my-9 my-5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-3 md:px-5 md:py-3 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                          <span className="font-medium">{t('see_the_book')}</span>
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default PopularBooks;