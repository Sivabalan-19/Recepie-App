import { Heart, Home } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

  // Animation variants
  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const activeIndicatorVariants = {
    initial: { width: 0 },
    animate: {
      width: "4px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className={`hidden md:block bg-white text-gray-800 shadow-md h-screen ${current.width} ${current.padding}`}
    >
      {/* Sidebar Header */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`${current.headerText} flex justify-center font-bold mb-6 text-orange-600 pl-4`}
      >
        Tasty Trove
      </motion.h2>

      {/* Sidebar Navigation */}
      <motion.ul className="space-y-4">
        {[
          { id: "/home", label: "Home", icon: Home },
          { id: "random", label: "Random", icon: Heart },
        ].map(({ id, label, icon: Icon }) => (
          <motion.li key={id} variants={listItemVariants} className="relative">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
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
            </motion.button>
            <AnimatePresence>
              {selectedItem === id && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-0 h-full w-1 bg-orange-500 rounded-l-lg"
                />
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Sidebar;
  