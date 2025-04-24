import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", form);
    // Handle actual login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Continue with Google clicked");
    // Add Google OAuth logic here
  };

  const handleTwitterLogin = () => {
    console.log("Continue with Twitter clicked");
    // Add Twitter OAuth logic here
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Remember Me + Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="border-b w-full border-gray-300"></span>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <span className="border-b w-full border-gray-300"></span>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-400 transition"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <button
            onClick={handleTwitterLogin}
            className="flex items-center justify-center gap-2 w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-300 transition"
          >
            <FaTwitter />
            Continue with Twitter
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/SignUp" className="text-blue-600 hover:underline">
            Sign up
          </Link>
          <Link to="/success-login" className="text-blue-500 underline">Test Success Page</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
