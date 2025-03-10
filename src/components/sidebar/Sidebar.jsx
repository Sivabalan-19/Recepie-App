// Sidebar.jsx
import { Heart, Home } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ size = "md" }) => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("/home");

  const sizeConfig = {
    s: { width: "w-40", padding: "p-2", iconSize: 16, headerText: "text-base" },
    md: { width: "w-56", padding: "p-3", iconSize: 18, headerText: "text-lg" },
    l: { width: "w-64", padding: "p-4", iconSize: 20, headerText: "text-xl" },
    xl: { width: "w-72", padding: "p-5", iconSize: 24, headerText: "text-2xl" },
  };

  const current = sizeConfig[size] || sizeConfig.md;

  const handleItemClick = (id) => {
    setSelectedItem(id);
    navigate(id);
  };

  return (
    <div
      className={`hidden md:block bg-white text-gray-800 shadow-md h-screen ${current.width} ${current.padding}`}
    >
      {/* Sidebar Header */}
      <h2
        className={`${current.headerText} flex  justify-center font-bold mb-6 text-orange-600 pl-4`}
      >
        Tasty Trove
      </h2>

      {/* Sidebar Navigation */}
      <ul className="space-y-4">
        {[
          { id: "/home", label: "Home", icon: Home },
          { id: "random", label: "Random", icon: Heart },
        ].map(({ id, label, icon: Icon }) => (
          <li key={id} className="relative">
            <button
              onClick={() => handleItemClick(id)}
              className={`w-full text-left pl-10 rounded transition-all duration-300 ease-in-out hover:bg-orange-50 focus:outline-none flex items-center p-2 gap-3 ${
                selectedItem === id
                  ? "text-orange-600 font-medium bg-orange-50"
                  : "text-gray-600"
              }`}
            >
              <Icon
                size={current.iconSize}
                className={
                  selectedItem === id ? "text-orange-600" : "text-gray-600"
                }
              />
              <span>{label}</span>
            </button>
            {selectedItem === id && (
              <div className="absolute right-0 top-0 h-full w-1 bg-orange-500 rounded-l-lg"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
