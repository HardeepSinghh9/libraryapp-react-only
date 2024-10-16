import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Page Not Found</h1>
      <Link to="/" className="text-blue-500">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
