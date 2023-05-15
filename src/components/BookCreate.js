import { useState } from "react";

const BookCreate = ({ createBook }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="form-create">
        <h3>Add A Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Book Name</label>
            <input className="input"value={title} onChange={handleChange} />
            <button className="button">Create!</button>
        </form>
    </div>
  )
};

export default BookCreate;
