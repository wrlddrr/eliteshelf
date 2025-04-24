import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MobileSidebar from "../components/MobileSidebar";
function Home() {
  return (
    <>
    <MobileSidebar />
    <div>
       
      <Header />

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-28 sm:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Welcome to Our Store
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Find the best products at unbeatable prices
          </p>
          <Link
            to=""
            className="inline-block bg-yellow-400 text-black font-semibold py-2.5 px-6 rounded-lg hover:bg-yellow-300 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      
      <Categories />

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {["Product 1", "Product 2", "Product 3"].map((product, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-200 rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product}</h3>
                <p className="text-lg text-gray-600 mb-4">
                  ${[49.99, 89.99, 129.99][idx].toFixed(2)}
                </p>
                <Link
                  to=""
                  className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-300"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
          <p className="text-lg sm:text-xl mb-8">
            Sign up for exclusive offers and updates
          </p>
          <Link
            to=""
            className="inline-block bg-yellow-400 text-black font-semibold py-2.5 px-6 rounded-lg hover:bg-yellow-300 transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
}

export default Home;
