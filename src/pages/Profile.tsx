import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavSideBar from "../components/NavSideBar";

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <NavSideBar
  isOpen={isSidebarOpen}
  onClose={() => setIsSidebarOpen(false)}
  onOpen={() => setIsSidebarOpen(true)}
/>


      {/* Page Content */}
      <div className="flex-1 relative">
        {/* Toggle Sidebar Button */}
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-white text-blue-600 p-2 rounded-full shadow-lg border border-blue-600"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Profile Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Profile Image */}
              <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center text-4xl text-gray-400">
                👤
              </div>

              {/* User Info */}
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                <p className="text-gray-600">johndoe@example.com</p>
                <p className="text-gray-600">Joined: January 2024</p>
              </div>

              {/* Edit Button */}
              <div className="mt-4 sm:mt-0">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Additional Details */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">Shipping Address:</p>
                <p>123 Street Name, City, Country</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">Phone:</p>
                <p>+1 234 567 890</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
