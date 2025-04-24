import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiShoppingBag, FiUser, FiHeart, FiSettings, FiHelpCircle, FiLogOut, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';

const Sidebar = ({ isOpen, onClose }) => {
  const [openCategories, setOpenCategories] = useState(false);
  const [priceFilterOpen, setPriceFilterOpen] = useState(false);
  const [brandFilterOpen, setBrandFilterOpen] = useState(false);
  const [ratingFilterOpen, setRatingFilterOpen] = useState(false);
  
  // Sample data
  const categories = [
    { name: 'Electronics', subcategories: ['Phones', 'Laptops', 'Cameras'] },
    { name: 'Clothing', subcategories: ['Men', 'Women', 'Kids'] },
    { name: 'Home & Kitchen', subcategories: ['Furniture', 'Appliances', 'Decor'] },
  ];
  
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony'];
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Shop Categories</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Main Navigation */}
          <nav className="mb-6">
            <ul>
              <li className="mb-2">
                <Link to="/" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                  <FiHome className="mr-3" />
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <button 
                  onClick={() => setOpenCategories(!openCategories)}
                  className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <div className="flex items-center">
                    <FiShoppingBag className="mr-3" />
                    Categories
                  </div>
                  {openCategories ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                
                {openCategories && (
                  <ul className="ml-8 mt-2 space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <details className="group">
                          <summary className="flex items-center justify-between p-1 text-gray-600 hover:text-gray-900 cursor-pointer">
                            <span>{category.name}</span>
                            <FiChevronDown className="group-open:rotate-180 transform transition" />
                          </summary>
                          <ul className="ml-4 mt-1 space-y-1">
                            {category.subcategories.map((sub, subIndex) => (
                              <li key={subIndex}>
                                <Link to={`/category/${category.name.toLowerCase()}/${sub.toLowerCase()}`} className="block p-1 text-gray-500 hover:text-gray-800">
                                  {sub}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="mb-2">
                <Link to="" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                  <FiHeart className="mr-3" />
                  Wishlist
                </Link>
              </li>
              <li className="mb-2">
                <Link to="" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                  <FiUser className="mr-3" />
                  My Account
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Filters Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Filters</h3>
            
            {/* Price Filter */}
            <div className="mb-4">
              <button 
                onClick={() => setPriceFilterOpen(!priceFilterOpen)}
                className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <span>Price Range</span>
                {priceFilterOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              {priceFilterOpen && (
                <div className="mt-2 pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">$0 - $1000</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="1000" 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <input 
                      type="number" 
                      placeholder="Min" 
                      className="w-20 p-1 border rounded text-sm"
                    />
                    <input 
                      type="number" 
                      placeholder="Max" 
                      className="w-20 p-1 border rounded text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
            
            {/* Brand Filter */}
            <div className="mb-4">
              <button 
                onClick={() => setBrandFilterOpen(!brandFilterOpen)}
                className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <span>Brand</span>
                {brandFilterOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              {brandFilterOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {brands.map((brand, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`brand-${index}`}
                        className="mr-2"
                      />
                      <label htmlFor={`brand-${index}`} className="text-sm text-gray-600">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Rating Filter */}
            <div className="mb-4">
              <button 
                onClick={() => setRatingFilterOpen(!ratingFilterOpen)}
                className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <span>Customer Rating</span>
                {ratingFilterOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              {ratingFilterOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {ratings.map((rating, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`rating-${index}`}
                        className="mr-2"
                      />
                      <label htmlFor={`rating-${index}`} className="text-sm text-gray-600">
                        {Array(rating).fill().map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                        {rating < 5 && Array(5 - rating).fill().map((_, i) => (
                          <span key={i} className="text-gray-300">★</span>
                        ))}
                        & Up
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t">
          <ul>
            <li className="mb-2">
              <Link to="" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                <FiSettings className="mr-3" />
                Settings
              </Link>
            </li>
            <li className="mb-2">
              <Link to="" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded">
                <FiHelpCircle className="mr-3" />
                Help Center
              </Link>
            </li>
            <li>
              <button className="flex items-center w-full p-2 text-gray-700 hover:bg-gray-100 rounded">
                <FiLogOut className="mr-3" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;