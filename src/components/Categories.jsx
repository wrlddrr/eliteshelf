// src/components/Categories.jsx
import React from "react";

const Categories = () => {
  const categoryList = ["Category 1", "Category 2", "Category 3", "Category 4"];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryList.map((category, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-40 bg-gray-200 rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
