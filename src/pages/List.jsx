import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../components/SideBar"; // Assuming you've created the Sidebar component from the previous example
import MobileSidebar from "../components/MobileSidebar";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "/products/basic-tee",
    imageSrc: "https://via.placeholder.com/300",
    imageAlt: "Front of Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Premium Hoodie",
    href: "/products/premium-hoodie",
    imageSrc: "https://via.placeholder.com/300",
    imageAlt: "Front of Premium Hoodie in grey.",
    price: "$60",
    color: "Grey",
  },
  {
    id: 3,
    name: "Premium Hoodie",
    href: "/products/premium-hoodie",
    imageSrc: "https://via.placeholder.com/300",
    imageAlt: "Front of Premium Hoodie in grey.",
    price: "$70",
    color: "Grey",
  },
  {
    id: 4,
    name: "Premium Hoodie",
    href: "/products/premium-hoodie",
    imageSrc: "https://via.placeholder.com/300",
    imageAlt: "Front of Premium Hoodie in grey.",
    price: "$80",
    color: "Grey",
  },
  {
    id: 5,
    name: "Premium Hoodie",
    href: "/products/premium-hoodie",
    imageSrc: "https://via.placeholder.com/300",
    imageAlt: "Front of Premium Hoodie in grey.",
    price: "$90",
    color: "Grey",
  },
  // Add more products as needed
];

function List() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <MobileSidebar />
    
    <div className="bg-white relative">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-40 p-2 rounded-md bg-white shadow-md lg:hidden"
        aria-label="Open sidebar"
      >
        <FiMenu className="h-6 w-6 text-gray-700" />
      </button>

      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          
          {/* Desktop filter button (optional) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="hidden lg:flex items-center gap-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <FiMenu className="h-5 w-5" />
            Filters
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default List;