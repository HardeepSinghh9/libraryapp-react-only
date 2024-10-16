import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <div>Book not found</div>;

  return (
    <div className="flex flex-wrap justify-center py-10">
      <div
        className="border w-4/5 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow bg-white text-left flex flex-col"
        style={{ height: "300px" }}
      >
        <div className=" text-center flex-grow">
          <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
          <p className="text-gray-700 mb-2">Author: {book.author}</p>
          <p className="text-gray-500 mb-4 truncate">{book.description}</p>
        </div>
        <div>
          <p className="text-center text-yellow-500 mb-2">
            Rating: {book.rating}
          </p>
          <Link to="/books/Fiction" className="text-blue-500q">
            Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
