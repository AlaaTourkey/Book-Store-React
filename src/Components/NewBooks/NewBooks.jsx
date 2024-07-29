import React, { useState } from 'react'
import Style from './NewBooks.module.css'
import Card from '../Card/Card'

function NewBooks() {

  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <h1>NewBooks
NewBooks</h1>
{/* <Card/> */}
<Card isOpen={isModalOpen} onClose={closeModal} book={selectedBook} />

    </>
  )
}

export default NewBooks
