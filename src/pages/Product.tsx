import React from "react";
import { Link } from "react-router-dom";
import SuggestedProducts from "../components/SuggestedProducts";
import MobileSidebar from "../components/MobileSidebar";
const Product = () => {
  return (
    <>
       <MobileSidebar />
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="w-full">
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow">
            <img
              src=""
              alt="Product Name"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Product Name</h1>
          <p className="text-xl text-blue-600 font-semibold">$89.99</p>
          <p className="text-gray-700">
            This is a detailed description of the product. It outlines the
            features, benefits, and key selling points in a simple and readable
            way.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors w-full sm:w-auto">
              Add to Cart
            </button>
            <Link
              to="/List"
              className="text-blue-600 hover:underline text-center sm:text-left"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
      <SuggestedProducts />
      </>
  );
};

export default Product;
