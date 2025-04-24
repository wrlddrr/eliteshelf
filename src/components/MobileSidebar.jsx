import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiHome,
  FiShoppingBag,
  FiCreditCard,
  FiBox,
  FiCheckCircle,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { to: "/", label: "Home", icon: <FiHome /> },
    { to: "/list", label: "Shop", icon: <FiShoppingBag /> },
    { to: "/Checkout", label: "Checkout", icon: <FiCreditCard /> },
    { to: "/Product", label: "Product", icon: <FiBox /> },
    { to: "/OrderSuccess", label: "OrderSuccess", icon: <FiCheckCircle /> },
    { to: "/MyOrders", label: "MyOrders", icon: <FiBox /> },
    { to: "/Login", label: "Login", icon: <FiLogIn /> },
    { to: "/SignUp", label: "SignUp", icon: <FiUserPlus /> },
  ];

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100%-4rem)] bg-white shadow-lg z-50 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } md:hidden`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end px-2 pt-2">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 p-2 hover:bg-gray-100 rounded-full transition"
        >
          {isOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-2 space-y-1 px-2">
        {links.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setIsOpen(false)}
            className="flex items-center text-gray-700 hover:bg-gray-100 p-3 rounded-md transition"
          >
            <span className="text-xl">{icon}</span>
            {isOpen && <span className="ml-3 text-sm font-medium">{label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileSidebar;
