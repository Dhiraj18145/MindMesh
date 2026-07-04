import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBrain,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const token = localStorage.getItem("token");

  const navItem = (path, text) => (
    <Link
      to={path}
      onClick={() => setMenuOpen(false)}
      className={`transition duration-300 ${
        location.pathname === path
          ? "text-indigo-400 font-semibold"
          : "hover:text-indigo-400"
      }`}
    >
      {text}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md shadow-lg">

      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <FaBrain className="text-pink-400 text-3xl" />

          <span className="text-4xl font-bold text-white">
            MindMesh
          </span>

        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-10 text-white">

          {navItem("/", "Home")}

          <a
            href="#features"
            className="hover:text-indigo-400 transition"
          >
            Features
          </a>

          <a
            href="#ideas"
            className="hover:text-indigo-400 transition"
          >
            Ideas
          </a>

          <a
            href="#testimonials"
            className="hover:text-indigo-400 transition"
          >
            Reviews
          </a>

          {token ? (
            <Link
              to="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-xl font-semibold transition"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-indigo-400 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-xl font-semibold transition"
              >
                Register
              </Link>
            </>
          )}

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-white flex flex-col px-8 py-6 gap-5">

          {navItem("/", "Home")}

          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>

          <a
            href="#ideas"
            onClick={() => setMenuOpen(false)}
          >
            Ideas
          </a>

          <a
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </a>

          {token ? (
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="bg-indigo-600 text-center py-3 rounded-xl"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-indigo-600 text-center py-3 rounded-xl"
              >
                Register
              </Link>
            </>
          )}

        </div>
      )}

    </nav>
  );
}

export default Navbar;