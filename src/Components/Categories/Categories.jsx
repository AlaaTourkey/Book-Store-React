import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

function Categories() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_KEY = 'AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU';

  function getAllCategories() {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:biography&key=${API_KEY}`);
  }

  const { data, isError, isLoading } = useQuery('getAllCategories', getAllCategories);

  if (isLoading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error loading data</div>;
  }

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="container w-3/4 m-auto">
        <h1 className="text-3xl font-bold text-center">Biography Books</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.data?.items?.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(book)}
            >
              {book.volumeInfo.imageLinks?.thumbnail && (
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
              )}
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-3 overflow-y-auto ">
          <div className="bg-gray-800 bg-opacity-95 p-5 rounded-lg w-full sm:w-3/4 lg:w-11/12 shadow-lg max-h-full overflow-y-auto">
            <div className="flex justify-end">
              <button
                className="text-red-500 hover:text-red-700 text-xl"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <h2 className="text-4xl font-bold mb-4 text-amber-800">{selectedBook.volumeInfo.title}</h2>
                <h5 className="text-3xl mb-4">{selectedBook.volumeInfo.subtitle}</h5>
                <p className="text-2xl ">{selectedBook.volumeInfo.authors?.join(', ')}</p>
                <p className="text-md mb-4">{selectedBook.volumeInfo.publishedDate}</p>
                <p className="text-gray-400 font-bold text-2xl">{selectedBook.volumeInfo.description}</p>
              </div>
              <div className="col-span-1 text-center flex justify-center">
                <img className="w-1/2" src={selectedBook.volumeInfo.imageLinks.thumbnail} alt="" />
              </div>
            </div>

            <table className="table-auto w-full mt-6 text-left">
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-bold">Publisher</td>
                  <td className="border px-4 py-2">{selectedBook.volumeInfo.publisher}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-bold">First Publish</td>
                  <td className="border px-4 py-2">{selectedBook.volumeInfo.publishedDate}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-bold">ISBN</td>
                  <td className="border px-4 py-2">
                    {selectedBook.volumeInfo.industryIdentifiers?.map((identifier) => (
                      <span key={identifier.identifier} className="text-md">
                        {identifier.identifier} &nbsp;
                      </span>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-bold">Language</td>
                  <td className="border px-4 py-2">{selectedBook.volumeInfo.language}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-bold">Pages</td>
                  <td className="border px-4 py-2">{selectedBook.volumeInfo.pageCount}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-bold">Preview Link</td>
                  <td className="border px-4 py-2"> <a href={selectedBook.volumeInfo.previewLink}>Preview</a></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-bold">Categories</td>
                  <td className="border px-4 py-2">{selectedBook.volumeInfo.categories?.join(', ')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Categories;
