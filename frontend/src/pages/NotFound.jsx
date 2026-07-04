import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-xl text-center">

        <FaExclamationTriangle className="text-yellow-500 text-7xl mx-auto mb-6" />

        <h1 className="text-8xl font-bold text-slate-900">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4 text-slate-800">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-5 leading-7">
          Oops! The page you are looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-10 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
        >
          <FaHome />
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;