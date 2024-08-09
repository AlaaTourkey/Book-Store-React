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
      <h1>{book.volumeInfo.title}</h1>
      <h2>{book.volumeInfo.subtitle}</h2>
      <table className="table-auto w-full mt-6 text-left ">
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
              <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                Preview
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Categories</td>
            <td className="border px-4 py-2">{book.volumeInfo.categories?.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CardDetails;
