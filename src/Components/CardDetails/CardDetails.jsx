import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CardDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch book details
    async function getBookDetail(bookId) {
      try {
        setLoading(true);
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        setBook(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    getBookDetail(bookId);
  }, [bookId]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book) {
    return <div>No book details found.</div>;
  }

  return (
    <>
      <div className="py-5">

        <div className="text-center text-3xl font-bold my-3 ">
          <h1 >{book.volumeInfo.title}</h1>
          <h2>{book.volumeInfo.subtitle}</h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="col-span-1  flex justify-center items-center">
            <div className=" w-3/4  ">
              <img className="w-full " src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            </div>
          </div>
          <div className="md:col-span-2 col-span-1 p-5">
            <p className="text-gray-400 font-light text-2xl">{book.volumeInfo.description.split(' ').slice(0, 50).join(' ')}...</p>
            <table className=" w-full my-6 text-left ">
              <tbody>
                <tr>
                  <td className=" px-4 py-2 font-bold">Publisher</td>
                  <td className=" px-4 py-2">{book.volumeInfo.publisher}</td>
                </tr>
                <tr>
                  <td className=" px-4 py-2 font-bold">First Publish</td>
                  <td className=" px-4 py-2">{book.volumeInfo.publishedDate}</td>
                </tr>
                <tr>
                  <td className=" px-4 py-2 font-bold">ISBN</td>
                  <td className=" px-4 py-2">
                    {book.volumeInfo.industryIdentifiers?.map((identifier) => (
                      <span key={identifier.identifier} className="text-md">
                        {identifier.identifier} &nbsp;
                      </span>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td className=" px-4 py-2 font-bold">Language</td>
                  <td className=" px-4 py-2">{book.volumeInfo.language}</td>
                </tr>
                <tr>
                  <td className=" px-4 py-2 font-bold">Pages</td>
                  <td className=" px-4 py-2">{book.volumeInfo.pageCount}</td>
                </tr>
                <tr>
                  <td className=" px-4 py-2 font-bold">Categories</td>
                  <td className=" px-4 py-2">{book.volumeInfo.categories?.join(', ')}</td>
                </tr>
              </tbody>
            </table>
            <a className='bg-green-600 px-4 py-2  text-white rounded-md' href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
              Preview
            </a>
          </div>
        </div>
      </div>

    </>
  );
}

export default CardDetails;
