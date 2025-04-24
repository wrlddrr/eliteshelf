import React from "react";
import { Link } from "react-router-dom";

const SuggestedProducts = () => {
  // Sample mock data (you'll replace this with real product data later)
  const suggestions = [
    { id: 1, name: "Cool Sneakers", price: 59.99, image: null },
    { id: 2, name: "Stylish Backpack", price: 39.99, image: null },
    { id: 3, name: "Smart Watch", price: 89.99, image: null },
    { id: 4, name: "Wireless Earbuds", price: 29.99, image: null },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        You might also like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {suggestions.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
          >
            <div className="h-40 bg-gray-100 rounded-md overflow-hidden mb-4 flex items-center justify-center">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400">No Image</span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              ${product.price.toFixed(2)}
            </p>
            <Link to={`/product/${product.id}`}>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition-colors">
                View
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuggestedProducts;
