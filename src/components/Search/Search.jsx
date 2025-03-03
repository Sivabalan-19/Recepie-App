import React from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ query, onSearch, placeholder = "Search recipes..." }) => {
  const handleChange = (e) => {
    if (onSearch) onSearch(e.target.value);
  };

  const handleClear = () => {
    if (onSearch) onSearch("");
  };

  return (
    <div className="flex items-center bg-orange-200/30 shadow-lg border border-orange-300 backdrop-blur-md rounded-full px-4 py-2 w-full max-w-md h-12">
      <Search className="text-black" size={20} />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 px-3 py-1 outline-none text-black bg-transparent placeholder-black h-full"
      />
      {query && (
        <button type="button" onClick={handleClear} className="text-black">
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
