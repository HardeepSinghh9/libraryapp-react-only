import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState("");

  const filteredBooks = books
    .filter((book) => (category ? book.category === category : true))
    .filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()) //search Bar can search either by title or author
    );

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">
        Browse Books {category && `in ${category}`}
      </h1>

      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full sm:w-1/2 mx-auto"
      />

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
          <p>No books found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
