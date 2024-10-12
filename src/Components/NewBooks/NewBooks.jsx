import React from 'react';
import Style from './NewBooks.module.css';
import demo1 from '../../assets/imgs/theme-demo-2.jpg'
import demo2 from '../../assets/imgs/theme-demo2.jpg'
import demo3 from '../../assets/imgs/theme-demo3.jpg'
import demo4 from '../../assets/imgs/theme-demo4.jpg'
import book1 from '../../assets/imgs/book1.jpg'
import book2 from '../../assets/imgs/book2.jpg'
import book3 from '../../assets/imgs/book3.jpg'
import book4 from '../../assets/imgs/book4.jpg'
import { Link } from 'react-router-dom';

function NewBooks() {

  return (
    <>
      {/* Choose Demo */}
      <section>
        <div className="demo py-7">
          <div className="container w-3/4 m-auto  text-white">
            <div className="text-center  m-auto mb-16 ">
              <h2 className='text-5xl my-2 '>Choose   <span className='font-bold'>Demo</span></h2>
              {/* line after header */}
              <div className="bg-white h-px  min-w-12 w-80 m-auto relative my-6 ">
                <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                  <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-white"></i></li>
                  <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-white"></i></li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
              <div className="col-span-1  ">
                <div className="image-container ">
                  <img src={demo1} alt="Demo Image" />
                  <div className="layout bg-blue-700 ">
                    <h4 className='uppercase'>author</h4>
                  </div>
                </div>
              </div>
              <div className="col-span-1  ">
                <div className="image-container ">
                  <img src={demo2} alt="Demo Image" />
                  <div className="layout bg-blue-700 ">
                    <h4 className='uppercase'>author</h4>
                  </div>
                </div>
              </div>
              <div className="col-span-1  ">
                <div className="image-container ">
                  <img src={demo3} alt="Demo Image" />
                  <div className="layout bg-blue-700 ">
                    <h4 className='uppercase'>author</h4>
                  </div>
                </div>
              </div>
              <div className="col-span-1  ">
                <div className="image-container ">
                  <img src={demo4} alt="Demo Image" />
                  <div className="layout bg-blue-700 ">
                    <h4 className='uppercase'>author</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* new Books */}
      <section>
        <div className="  text-white">
          <div className=" my-8 bg-amber-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center text-white ">
              <Link to="/categories/child">
                <div className={`${Style.post1} ${Style.post} flex items-center justify-center flex-col relative overflow-hidden group`}>
                  <div className={`${Style.inner_content} relative z-10`}>
                    <h6 className="text-white">Books to Help You Bring Up a Child</h6>
                  </div>
                  <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className='w-12 h-12 flex items-center justify-center bg-blue-700'>
                      <i className="fa fa-plus text-white" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="layout absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-0"></div>
                </div>
              </Link>
              <Link to={"/categories/cooking"}>
                <div className={`${Style.post2} ${Style.post} flex items-center justify-center flex-col relative overflow-hidden group`}>
                  <div className={`${Style.inner_content} relative z-10`}>
                    <h6 className="text-white">Books to Help You Learn Cooking</h6>
                  </div>
                  <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className='w-12 h-12 flex items-center justify-center bg-blue-700'>
                      <i className="fa fa-plus text-white" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="layout absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-0"></div>
                </div>
              </Link>
              <Link to={"/categories/health"}>
                <div className={`${Style.post3} ${Style.post} flex items-center justify-center flex-col relative overflow-hidden group`}>
                  <div className={`${Style.inner_content} relative z-10`}>
                    <h6 className="text-white">Books to Help You Stay Positive</h6>
                  </div>
                  <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className='w-12 h-12 flex items-center justify-center bg-blue-700'>
                      <i className="fa fa-plus text-white" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="layout absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-0"></div>
                </div>

              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Choose Your Book! */}
      <section>
        <div className="">
          <div className="container  w-11/12 m-auto">
            <div className="">
              <div className="text-center  m-auto mb-16 ">
                <h2 className='text-5xl my-2 '>Choose your   <span className='font-bold'>Books</span></h2>
                {/* line after header */}
                <div className="bg-blue-700 h-px  min-w-12 w-80 m-auto relative my-6 ">
                  <ul className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex'>
                    <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-blue-700"></i></li>
                    <li><i className="fa-solid fa-square  rotate-45 text-xs mx-1 text-blue-700"></i></li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-1 text-center">
                <div className="col-span-1 w-3/4 group mx-auto flex flex-col items-center">
                  <div className="flex items-center justify-center overflow-hidden">
                    <img
                      src={book1}
                      className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                      alt="Book Image"
                    />
                  </div>
                  <div className="my-4">
                    <h4 className="uppercase transition-colors duration-500 ease-in-out group-hover:text-blue-500">
                      Drama
                    </h4>
                  </div>
                </div>
                <div className="col-span-1 w-3/4 group mx-auto flex flex-col items-center">
                  <div className="flex items-center justify-center overflow-hidden">
                    <img
                      src={book2}
                      className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                      alt="Book Image"
                    />
                  </div>
                  <div className="my-4">
                    <h4 className="uppercase transition-colors duration-500 ease-in-out group-hover:text-blue-500">
                      Drama
                    </h4>
                  </div>
                </div>
                <div className="col-span-1 w-3/4 group mx-auto flex flex-col items-center">
                  <div className="flex items-center justify-center overflow-hidden">
                    <img
                      src={book3}
                      className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                      alt="Book Image"
                    />
                  </div>
                  <div className="my-4">
                    <h4 className="uppercase transition-colors duration-500 ease-in-out group-hover:text-blue-500">
                      Drama
                    </h4>
                  </div>
                </div>
                <div className="col-span-1 w-3/4 group mx-auto flex flex-col items-center">
                  <div className="flex items-center justify-center overflow-hidden">
                    <img
                      src={book4}
                      className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                      alt="Book Image"
                    />
                  </div>
                  <div className="my-4">
                    <h4 className="uppercase transition-colors duration-500 ease-in-out group-hover:text-blue-500">
                      Drama
                    </h4>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewBooks;
