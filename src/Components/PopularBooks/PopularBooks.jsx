import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PopularBooks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [popular, setPopular] = useState(null);
  const slides = popular ? popular.map(book => (
    <div key={book.id} className="h-full flex items-center justify-center">
      {book?.volumeInfo?.imageLinks?.thumbnail ? (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">Image Not Available</div>
      )}
    </div>
  )) : [];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    dots: false,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    beforeChange: (current, next) => setCurrentSlide(next),
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

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=bestsellers&maxResults=10`);
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
      <section>
        <div className="my-10 popular">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
            <div className="col-span-1 slider-container flex justify-center items-center py-7 bg-blue-700">
              <div className="w-3/5  py-5">
                <Slider className='relative' {...settings}>
                  {slides.map((slide, index) => (
                    <div className='p-4' key={index}>{slide}</div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-span-1 bg-gray-100 p-4">
              <div className="w-1/2">
                <div className="w-3/4">
                  <h2 className='text-3xl my-2'>Popular <span className='font-bold'>Books</span></h2>
                  {/* line after header */}
                  <div className="bg-blue-700 h-px w-auto m-auto relative my-6">
                    <ul className='absolute top-0 left-0 transform -translate-x-2 -translate-y-1/2 flex'>
                      <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-sm mx-1"></i></li>
                      <li><i className="fa-solid fa-square text-blue-700 rotate-45 text-sm mx-1"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="p-6">
                  {popular && (
                    <div>
                      <div className="my-6">
                        <h2 className='text-2xl'><i className="fa-solid fa-square  rotate-45 text-sm mx-1 text-amber-400"></i> Title </h2>
                        <p className='px-10 text-lg text-gray-500 font-bold'>{popular[currentSlide]?.volumeInfo?.title}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="">
                          <h2 className='text-2xl'><i className="fa-solid fa-square  rotate-45 text-sm mx-1 text-amber-400"></i> Info  </h2>
                          <div className="my-4">
                            {popular[currentSlide]?.volumeInfo?.imageLinks?.thumbnail ? (
                              <img className='w-20 h-20 rounded-md border-4 border-amber-400' src={popular[currentSlide]?.volumeInfo?.imageLinks.thumbnail} alt="" />
                            ) : (
                              <div className="w-16 h-16 flex items-center justify-center bg-gray-300">Image Not Available</div>
                            )}
                            <p className='my-3 text-gray-500'> {popular[currentSlide]?.volumeInfo.publisher}</p>
                          </div>
                        </div>
                        <div className="">
                          <h2 className='text-2xl'>Pages </h2>
                          <p className='my-3 text-xl text-gray-500'>{popular[currentSlide]?.volumeInfo.pageCount} Pages</p>
                        </div>
                      </div>
                      <div className="my-5">
                        <h2 className='text-2xl'><i className="fa-solid fa-square  rotate-45 text-sm mx-1 text-amber-400"></i> Description </h2>
                        <p className="text-gray-400 font-light text-2xl">{popular[currentSlide]?.volumeInfo.description.split(' ').slice(0, 60).join(' ')}...</p>
                      </div>
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