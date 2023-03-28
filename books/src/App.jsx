import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const port = "http://localhost:3001/books";
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(port);
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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
    // const updatedBooks = books.map((book) => {
    //   if (book.id === id) {
    //     return { id: book.id, title: newTitle };
    //   } else return book;
    // });
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

    // console.log("need to add book with: ", title);
    // const updatedBooks = [...books, { id: Math.trunc(Math.random() * 9999), title }];
    // setBooks(updatedBooks);
    // console.log(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
