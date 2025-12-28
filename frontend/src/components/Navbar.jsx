import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../images/logo.png";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user} = useAuth();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-slate-700 bg-black bg-opacity-60 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://images.vexels.com/media/users/3/127711/isolated/preview/384e0b3361d99d9c370b4037115324b9-flat-vintage-car-icon.png"
            alt="Car Logo"
            className="h-10 w-10 object-contain mr-2 drop-shadow"
            style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}
          />
          <span
            className="self-center text-4xl whitespace-nowrap drop-shadow-lg tracking-wide"
            style={{
              fontFamily: 'Lobster, cursive',
              color: '#fff',
              letterSpacing: '2px',
              background: 'none',
            }}
          >
            RentMyCar
          </span>
        </Link>
        <div className="flex items-center space-x-6 md:order-2">
          <ul className="flex flex-row font-medium space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent hover:underline font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/browse-cars"
                className="block py-2 px-3 md:p-0 rounded md:bg-transparent hover:underline font-semibold"
              >
                Browse Cars
              </Link>
            </li>
          </ul>
          {user?.name ? (
            <Link to="/profile">
              <div
                className="flex items-center justify-center w-10 h-10 text-white rounded-full font-bold text-lg transition-all duration-200"
                style={{ backgroundColor: '#b3541e' }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#8a3c11'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = '#b3541e'}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>
            </Link>
          ) : (
            <button
              type="button"
              className="text-white font-medium rounded-lg text-sm px-4 py-2 text-center"
              style={{ backgroundColor: '#b3541e' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#8a3c11'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#b3541e'}
            >
              <Link to="/registration">Register</Link>
            </button>
          )}
          <button
            onClick={handleToggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
