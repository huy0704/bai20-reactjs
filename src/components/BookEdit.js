import React, { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
