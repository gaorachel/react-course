import React, { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const port = "http://localhost:3001/books";
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(port);
    setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`${port}/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`${port}/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post(port, { title });
    const updatedBooks = [...books, response.data];
    console.log(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export default BooksContext;
export { Provider };
