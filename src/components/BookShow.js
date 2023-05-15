import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete , onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleClickDelete = () => {
    onDelete(book.id);
  };
  const handleClickEdit = () => {
    setIsEdit(!isEdit);
  };
  const submitEdit = (new_title) => {
    setIsEdit(!isEdit);
    onEdit(book.id ,new_title);
  };
  const content = isEdit ? (
    <BookEdit book={book} onSubmit={submitEdit} />
  ) : (
    <h3>{book.title}</h3>
  );

  return (
    <div className="item-book" id={`book-${book.id}`}>
      <button className="edit" onClick={handleClickEdit}>
        Edit
      </button>
      <button className="delete" onClick={handleClickDelete}>
        Delete
      </button>
      <div className="thumbnail">
        
        <img alt="" src={`https://picsum.photos/seed/${book.id}/200/300`} />
      </div>
      {content}
    </div>
  );
};

export default BookShow;
