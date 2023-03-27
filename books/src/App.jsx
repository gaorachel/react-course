import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("need to add book with: ", title);
    const updatedBooks = [...books, { id: Math.trunc(Math.random() * 9999), title }];
    setBooks(updatedBooks);
    console.log(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
