import React, { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";
const BookList = ({ books, onDelete, onEdit }) => {
  const listItems = books.map((book) => (
    <BookShow onEdit={onEdit} onDelete={onDelete} book={book} />
  ));

  const value = useContext(BooksContext);

  return (
    <div className="list-books">
      <h3>Reading Book</h3>
      {value}
      {listItems}
    </div>
  );
};

export default BookList;
