import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import { useEffect } from "react";

function HomePage() {
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredBooks = books.filter(
    (book) => book.title.toLowerCase().includes(search.toLowerCase()) //search by title only
  );

  //unique categories from book data
  const uniqueCategories = Array.from(
    new Set(books.map((book) => book.category))
  );

  const handleCategoryClick = (category) => {
    navigate(`/books/${category}`);
  };

  function suuuc() {
    return toast.info("each category button is dynamically made.", {
      position: "top-right",
      autoClose: 12500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
      rtl: false,
    });
  }
  useEffect(() => {
    suuuc();
  }, []);

  return (
    <div className="container mx-auto p-4 text-center">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-4">Welcome to the Online Library</h1>

      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full sm:w-1/2 mx-auto"
      />

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Browse by Category:</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/*all books */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow bg-white text-left flex flex-col"
              style={{ width: "260px", height: "300px" }}
            >
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-700 mb-2">Author: {book.author}</p>
                <p className="text-gray-500 mb-4 truncate">
                  {book.description}
                </p>
              </div>
              <div>
                <p className="text-yellow-500 mb-2">Rating: {book.rating}</p>
                <Link
                  to={`/book/${book.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
