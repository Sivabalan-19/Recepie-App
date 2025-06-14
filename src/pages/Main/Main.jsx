import { SearchX } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AutocompleteInput from "../../components/Autocomplete/Autocomplete";
import SearchBar from "../../components/Search/Search";
import useMealStore from "../../Store/random";
import { motion } from "framer-motion";

function Main() {
  const {
    meals,
    loading,
    search,
    fetchSearchMeal,
    changevalue,
    CategoriesList,
    AreaList,
    IngridientsList,

    selectedCategory,
    selectedArea,
    selectedIngridient,

    fetchCategoryList,
    fetchAreaList,
    fetchIngridientsList,

    fetchByCategory,
    fetchByIngridients,
    fetchByArea,
  } = useMealStore();

  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCategoryList();
    fetchAreaList();
    fetchIngridientsList();
    if (selectedCategory) {
      fetchByCategory(selectedCategory);
    } else if (selectedArea) {
      fetchByArea(selectedArea);
    } else if (selectedIngridient) {
      fetchByIngridients(selectedIngridient);
    } else {
      fetchSearchMeal();
    }

    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Card animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-4 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-orange-800"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="justify-end flex w-full"
      >
        <SearchBar query={search} callfuntion={fetchSearchMeal} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap justify-between mt-6 gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AutocompleteInput
            header={"Categories"}
            value={selectedCategory}
            dotvalue={`strCategory`}
            funtionCall={fetchByCategory}
            dropdownvalue={CategoriesList}
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AutocompleteInput
            header={"Ingridients"}
            dotvalue={`strIngredient`}
            value={selectedIngridient}
            funtionCall={fetchByIngridients}
            dropdownvalue={IngridientsList}
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <AutocompleteInput
            header={"Area"}
            dotvalue={`strArea`}
            funtionCall={fetchByArea}
            dropdownvalue={AreaList}
            value={selectedArea}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-2xl font-bold text-orange-800 mt-6 mb-4 pb-2 border-b-2 border-orange-500"
      >
        {search
          ? `Search Result for ${search}`
          : !search
          ? "Explore Latest Meals"
          : ""}
      </motion.div>

      {loading ? (
        // Skeleton Loader with animation
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-200 animate-pulse"
            >
              <div className="w-full h-48 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="w-full h-10 bg-gray-300 rounded"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : meals ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {meals.map((meal, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-200"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                {/* Meal Title */}
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  {meal.strMeal}
                </h3>

                {/* Category and Area Chips */}
                <div className="flex space-x-2 mb-4">
                  {meal.strCategory && (
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mr-2"
                    >
                      {meal?.strCategory}
                    </motion.span>
                  )}
                  {meal.strArea && (
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {meal?.strArea}
                    </motion.span>
                  )}
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#c2410c" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="mt-2 bg-orange-600 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={() => {
                    navigate(`/${meal.idMeal}/${meal.strMeal}`);
                  }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center py-12 px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="bg-orange-100 rounded-full p-6 mb-6"
          >
            <SearchX size={64} className="text-orange-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold text-gray-800 mb-3"
          >
            No recipes found
          </motion.h2>

          {search && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 mb-6"
            >
              We couldn't find any recipes matching "
              <span className="font-medium text-orange-500 italic ">
                {search}
              </span>
              "
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              onClick={() => {
                changevalue("search", "");
                fetchSearchMeal("");
              }}
            >
              Clear Search
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 p-4 bg-orange-50 rounded-lg max-w-md"
          >
            <h3 className="font-semibold mb-2 text-gray-700">Suggestions:</h3>
            <ul className="text-gray-600 text-left pl-4">
              {[
                "Check your spelling",
                "Try more general keywords",
                "Try a different search term",
                "Browse our categories for inspiration",
              ].map((suggestion, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="mb-1"
                >
                  • {suggestion}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Main;
