import React from 'react'
import Style from './Categories.module.css'
import axios from 'axios'
import { useQuery } from 'react-query';

function Categories() {
  const API_KEY = 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU';
  function getAllCaategories() {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:children&key=${API_KEY}`)  
  }
  const  {data , isError , isLoading} = useQuery('getAllCaategories',getAllCaategories)
  console.log(data?.data?.items);

  if (isLoading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error loading data</div>;
  }
  return (
    <>
      <section>
      <h1 className="text-3xl font-bold text-center mb-6">Children's Books</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.data?.items?.map((book) => (
            <div key={book.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="w-full h-full"/>
              )}
              {/* <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{book.volumeInfo.title}</h2>
                <p className="text-gray-600 mb-2">{book.volumeInfo.authors?.join(', ')}</p>
                <p className="text-gray-500">{book.volumeInfo.publishedDate}</p>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Categories
