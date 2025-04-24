import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20 relative">
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-8 right-8 bg-yellow-400 text-gray-900 p-3 rounded-full hover:bg-yellow-300 transition-all shadow-lg hover:scale-105"
        aria-label="Back to top"
      >
        <FiArrowUp size={24} />
      </button>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">YourStore</h2>
          <p className="text-sm mb-6 max-w-xs">
            Revolutionizing e-commerce with curated quality and seamless experiences since 2020
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 hover:text-yellow-400 transition-colors">
              <FiFacebook size={20} aria-label="Facebook" />
            </a>
            <a href="#" className="p-2 hover:text-yellow-400 transition-colors">
              <FiInstagram size={20} aria-label="Instagram" />
            </a>
            <a href="#" className="p-2 hover:text-yellow-400 transition-colors">
              <FiTwitter size={20} aria-label="Twitter" />
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/new-arrivals" className="hover:text-yellow-400 transition-colors">New Arrivals</Link></li>
            <li><Link to="/best-sellers" className="hover:text-yellow-400 transition-colors">Best Sellers</Link></li>
            <li><Link to="/sales" className="hover:text-yellow-400 transition-colors">Flash Sales</Link></li>
            <li><Link to="/gift-cards" className="hover:text-yellow-400 transition-colors">Gift Cards</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">24/7 Support</Link></li>
            <li><Link to="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-yellow-400 transition-colors">Shipping Policy</Link></li>
            <li><Link to="/sustainability" className="hover:text-yellow-400 transition-colors">Sustainability</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">Get Updates</h3>
          <p className="text-sm mb-4">
            Exclusive offers, product launches, and style inspiration direct to your inbox
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Email for newsletter subscription"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-semibold px-6 rounded-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
            >
              Join Now
            </button>
          </form>
          <div className="mt-4 text-xs text-gray-400">
            By subscribing, you agree to our <Link to="/privacy" className="underline hover:text-yellow-400">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Legal Section */}
      <div className="mt-12 pt-8 border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} YourStore. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link to="/accessibility" className="hover:text-yellow-400 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;