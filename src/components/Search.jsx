// src/components/Search.jsx
import { useState, useEffect, useRef } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const ref = useRef();

  // Dummy data
  const products = ["Laptop", "Smartphone", "Shoes", "Headphones", "Bag", "Watch"];

  useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const results = products.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(results);
    setShowResults(true);
  }, [query]);

  return (
    <div ref={ref} className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-80 z-50 p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {showResults && (
        <ul className="mt-4 max-h-60 overflow-y-auto">
          {filteredResults.length > 0 ? (
            filteredResults.map((result, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer rounded"
              >
                {result}
              </li>
            ))
          ) : (
            <li className="text-gray-500 p-2">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
