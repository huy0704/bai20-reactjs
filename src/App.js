import React, { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./App.css";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 9999), title: title },
    ];
    setBooks(updatedBooks);
  };
  const updateBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    const updatedBooks = books.map((book) =>
      // if (book.id === id) return { ...book, title: new_title };
      // return book;
      book.id === id ? { ...book, title } : book
    );
    setBooks(updatedBooks);
  };
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div>
      <BookList
        onEdit={updateBookById}
        books={books}
        onDelete={deleteBookById}
      />
      <BookCreate createBook={createBook} />
    </div>
  );
};

export default App;
