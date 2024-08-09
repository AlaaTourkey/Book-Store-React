import React from 'react';
import Style from './Card.module.css';
import { Link } from 'react-router-dom';

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-gray-300">
          <div className="col-span-2">
            <h2 className="text-4xl font-bold mb-4 text-amber-800">{book.volumeInfo.title}</h2>
            <h5 className="text-3xl mb-4">{book.volumeInfo.subtitle}</h5>
            <p className="text-2xl ">{book.volumeInfo.authors?.join(', ')}</p>
            <p className="text-md mb-4">{book.volumeInfo.publishedDate}</p>
            <p className="text-gray-400 font-bold text-2xl">{book.volumeInfo.description.split(' ').slice(0, 60).join(' ')}...</p>
          </div>
          <div className="col-span-1 text-center flex justify-center">
            <img className="w-1/2" src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          </div>
          <div className="col-span-3 text-center">
            <Link to={`/CardDetails/${book.id}`}>
              <button className='text-2xl bg-teal-800 p-3 mt-4'>More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
