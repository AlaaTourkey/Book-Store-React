import React from 'react'
import Style from './Card.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useQuery } from 'react-query';

function Card({ isOpen, onClose, book }) {

    if (!isOpen || !book) {
      return null;
    }

    return (

      
      <div className="fixed inset-0 flex items-center justify-center z-50 p-3 overflow-y-auto">
        <div className="bg-gray-800 bg-opacity-95 p-5 rounded-lg w-full sm:w-3/4 lg:w-11/12 shadow-lg max-h-full overflow-y-auto">
          <div className="flex justify-end">
            <button
              className="text-red-500 hover:text-red-700 text-xl"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2">
              <h2 className="text-4xl font-bold mb-4 text-amber-800">{book.volumeInfo.title}</h2>
              <h5 className="text-3xl mb-4">{book.volumeInfo.subtitle}</h5>
              <p className="text-2xl ">{book.volumeInfo.authors?.join(', ')}</p>
              <p className="text-md mb-4">{book.volumeInfo.publishedDate}</p>
              <p className="text-gray-400 font-bold text-2xl">{book.volumeInfo.description.split(' ').slice( 0,60).join(' ')}</p>
            </div>
            <div className="col-span-1 text-center flex justify-center">
              <img className="w-1/2" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            </div>
          </div>

          <table className="table-auto w-full mt-6 text-left">
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-bold">Publisher</td>
                <td className="border px-4 py-2">{book.volumeInfo.publisher}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">First Publish</td>
                <td className="border px-4 py-2">{book.volumeInfo.publishedDate}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">ISBN</td>
                <td className="border px-4 py-2">
                  {book.volumeInfo.industryIdentifiers?.map((identifier) => (
                    <span key={identifier.identifier} className="text-md">
                      {identifier.identifier} &nbsp;
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Language</td>
                <td className="border px-4 py-2">{book.volumeInfo.language}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Pages</td>
                <td className="border px-4 py-2">{book.volumeInfo.pageCount}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Preview Link</td>
                <td className="border px-4 py-2">
                  <a href={book.volumeInfo.previewLink}>Preview</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-bold">Categories</td>
                <td className="border px-4 py-2">{book.volumeInfo.categories?.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default Card
