import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    category: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...formData, id: Date.now() }));
    navigate("/browse");
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 bg-white shadow-md p-6 rounded"
      >
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="border p-2 mb-2 w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="border p-2 mb-4 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
