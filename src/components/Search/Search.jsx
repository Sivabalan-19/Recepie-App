import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import useMealStore from "../../Store/random";

const SearchBar = ({
  callfuntion,
  placeholder = "Search recipes...",
  debounceDelay = 500,
}) => {
  const { search, changevalue } = useMealStore(); // Access search state and changevalue function from Zustand store
  const [debouncedQuery, setDebouncedQuery] = useState(search); // Debounced query to prevent immediate API call

  useEffect(() => {
    // Set a timer to update debouncedQuery after the specified delay
    const timer = setTimeout(() => {
      setDebouncedQuery(search);
    }, debounceDelay);
    return () => clearTimeout(timer);
  }, [search, debounceDelay]); // Runs when `search` or `debounceDelay` changes

  const handleChange = (e) => {
    const value = e.target.value;
    changevalue("search", value);
    if (e.target.value == "") {
      callfuntion("");
    }
  };

  const handleClear = () => {
    changevalue("search", ""); // Clear the search input
    callfuntion("");
  };

  useEffect(() => {
    if (debouncedQuery) {
      callfuntion(debouncedQuery); // Call the API function after debouncing
    }
  }, [debouncedQuery, callfuntion]); // Re-run when `debouncedQuery` or `callfuntion` changes

  return (
    <div className="flex items-center bg-orange-200/30 shadow-lg border border-orange-300 backdrop-blur-md rounded-full px-4 py-2 w-full max-w-md h-12">
      <Search className="text-black" size={20} />
      <input
        type="text"
        value={search || ""}
        onChange={handleChange} // Handle input changes and update store
        placeholder={placeholder}
        className="flex-1 px-3 py-1 outline-none text-black bg-transparent placeholder-black h-full"
      />
      {search && (
        <button type="button" onClick={handleClear} className="text-black">
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
