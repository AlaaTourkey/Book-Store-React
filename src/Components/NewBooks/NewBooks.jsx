import React from 'react';
import Style from './NewBooks.module.css';
import demo1 from '../../assets/imgs/theme-demo-2.jpg'
import demo2 from '../../assets/imgs/theme-demo2.jpg'
import demo3 from '../../assets/imgs/theme-demo3.jpg'
import demo4 from '../../assets/imgs/theme-demo4.jpg'

function NewBooks() {

  return (
    <>
      {/* new Books */}
      <section>
        <div className=" my-8 bg-amber-600">
          <div className="grid grid-cols-3 gap-4 text-center text-white ">
            <div className={`${Style.post1} flex items-center justify-center flex-col relative overflow-hidden`}>
              <div className={`${Style.inner_content}`}>
                <h6>Books to Help You Bring Up a Child</h6>
              </div>
              <div className=" absolute bottom-0">
                <span className=' w-12 h-12 flex items-center justify-center  bg-blue-700'>
                  <i className=" fa fa-plus " aria-hidden="true"></i>
                </span>
              </div>
              {/* <div className="layout "></div> */}
            </div>
            <div>09</div>
            <div>09</div>
          </div>

        </div>
      </section>

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

    </>
  );
}

export default NewBooks;
