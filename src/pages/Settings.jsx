import React, { useState } from "react";
import NavSideBar from "../components/NavSideBar";

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [form, setForm] = useState({
    username: "johndoe",
    email: "johndoe@example.com",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle saving logic here
    console.log("Settings Updated:", form);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
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
          className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* Settings Content */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Account Settings</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave blank to keep current password"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                Save Changes
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
