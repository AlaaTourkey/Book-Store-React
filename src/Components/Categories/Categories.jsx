import React from 'react'
import Style from './Categories.module.css'
import axios from 'axios'
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';

function Categories() {
  const API_KEY = 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU';
  function getAllCaategories() {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:biography&key=${API_KEY}`)
  }
  const { data, isError, isLoading } = useQuery('getAllCaategories', getAllCaategories)
  console.log(data?.data?.items);

  if (isLoading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error loading data</div>;
  }
  return (
    <>
      <section className="container w-3/4 m-auto ">
        <h1 className="text-3xl font-bold text-center ">Children's Books</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.data?.items?.map((book) => (
            <div key={book.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {book.volumeInfo.imageLinks?.thumbnail && (<>
                <NavLink to={`/card/${book.id}`}>
                  <div className="group relative">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-full h-80" />
                    <div className="bg-gray-200 bg-opacity-50 p-4 absolute top-0 bottom-0 w-full rounded-lg shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-200 flex items-center justify-center flex-col">
                      <p className="text-black font-extrabold text-2xl">
                        {book.volumeInfo.authors?.join(', ')}
                      </p>
                      <p className="text-2xl text-black">
                        {book.volumeInfo.publishedDate}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Categories
