import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const SuccessLogin = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Login Successful!</h2>
        <p className="text-gray-600 mb-6">Welcome back! What would you like to do next?</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/List"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Go Shopping
          </Link>
          <Link
            to="/Profile"
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessLogin;
