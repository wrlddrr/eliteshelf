import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";


const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Brand & Main Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center text-2xl font-bold text-gray-800 hover:text-gray-600"
            >
              <svg
                className="w-8 h-8 mr-2 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              EliteShelf
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/list"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/Checkout"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium transition-colors"
              >
                Checkout
              </Link>
              <Link
                to="/Product"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium transition-colors"
              >
                Product
              </Link>
              <Link
                to="/OrderSuccess"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium transition-colors"
              >
                OrderSucess
              </Link>
              <Link
                to="/MyOrders"
                className="text-gray b-600 hover:text-indigo-600 px-3 py-2 font-medium transition-colors"
              >
                MyOrders
              </Link>
              <Link
                to="/Login"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                to="/SignUp"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 font-medium transition-colors"
              >
                SignUp
              </Link>
            </div>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
                onClick={() => setShowSearch((prev) => !prev)}
                className="p-2 text-gray-600 hover:text-indigo-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>


            {/* Cart Icon */}
            <Link to="/Cart" className="p-2 text-gray-600 hover:text-indigo-600 relative">

              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
              </span>
              </Link>
            

            {/* Wishlist */}
            <Link to="/Wishlist" className="p-2 text-gray-600 hover:text-indigo-600">

              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
           </Link>

            {/* User Icon -> Link to Profile */}
            <Link to="/Profile" className="p-2 text-gray-600 hover:text-indigo-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {showSearch && (
        <div ref={searchRef}>
          <Search />
        </div>
      )}
    </nav>
    
  );
};

export default Navbar;
