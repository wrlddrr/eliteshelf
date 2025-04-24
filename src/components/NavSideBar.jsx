import React from "react";
import { FiUser, FiSettings, FiLogOut, FiShoppingBag, FiX, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavSideBar = ({ isOpen, onClose, onOpen }) => {
  const navLinks = [
    { to: "/Profile", label: "Profile", icon: FiUser },
    { to: "/MyOrders", label: "My Orders", icon: FiShoppingBag },
    { to: "/Settings", label: "Settings", icon: FiSettings },
    // Add more navigation links here
    // { to: "/new-link", label: "New Link", icon: FiIcon },
  ];

  return (
    <>
      {/* Collapsed Menu Icon */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed left-4 top-20 z-30 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all"
          aria-label="Open menu"
        >
          <FiMenu className="w-6 h-6 text-gray-600" />
        </button>
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-xl transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          aria-label="Close menu"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center pt-8 pb-6 border-b border-gray-100">
          <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
            <FiUser className="text-blue-600 text-2xl" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-1">John Doe</h3>
          <p className="text-sm text-gray-500">john@example.com</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-1.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="flex items-center px-4 py-2.5 text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <link.icon className="mr-3 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <div className="mt-8 border-t border-gray-100 pt-4">
            <button className="flex items-center w-full px-4 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <FiLogOut className="mr-3 w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default NavSideBar;