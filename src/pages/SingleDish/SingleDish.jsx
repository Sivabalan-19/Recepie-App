import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Search/Search";
import useMealStore from "../../Store/random";
import { RandomSkeleton } from "../../utils/Skleton";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function SingleDish() {
  const { id, name } = useParams();
  const { selectedMeal, loading, fetchMealById } = useMealStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    fetchMealById(id);
  }, [id, fetchMealById]);

  const openModal = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    setVideoUrl(embedUrl);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  if (loading || !selectedMeal) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 p-6 h-screen overflow-y-auto bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-serif font-bold text-amber-800 mb-8 border-b border-amber-300 pb-4"
        >
          Recipe Details
        </motion.div>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8"
        >
          <RandomSkeleton />
        </motion.div>
      </motion.div>
    );
  }

  // Mapping ingredients and measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = selectedMeal[0][`strIngredient${i}`];
    const measure = selectedMeal[0][`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }

  // Split instructions into steps
  const instructions = selectedMeal[0].strInstructions
    ? selectedMeal[0].strInstructions
        .split(/\r\n|\n|\r/)
        .filter((step) => step.trim() !== "")
    : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-6 h-screen overflow-y-auto bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-serif font-bold text-amber-800 mb-8 border-b border-amber-300 pb-4"
      >
        Recipe Details
      </motion.div>

      <motion.div
        variants={popIn}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-xl shadow-xl overflow-hidden border border-amber-200 transition-all duration-300 hover:shadow-2xl max-w-6xl mx-auto"
      >
        {/* Main content with image and details side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Container */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-full"
          >
            <div className="h-full relative overflow-hidden">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
                src={selectedMeal[0]?.strMealThumb}
                alt={selectedMeal[0]?.strMeal}
                className="w-full h-full object-cover object-center"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:hidden flex items-end"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="p-6 text-white"
                >
                  <h2 className="text-3xl font-serif font-bold mb-2 text-shadow">
                    {selectedMeal[0]?.strMeal}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="bg-amber-100/80 text-amber-800 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {selectedMeal[0]?.strCategory}
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="bg-amber-100/80 text-amber-800 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {selectedMeal[0]?.strArea}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Details Container */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="p-6"
          >
            {/* Title - Only visible on desktop */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              animate="visible"
              className="hidden lg:block mb-6"
            >
              <h2 className="text-3xl font-serif font-bold text-amber-800 mb-3">
                {selectedMeal[0]?.strMeal}
              </h2>

              <div className="flex flex-wrap gap-2 mb-4">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  {selectedMeal[0]?.strCategory}
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  {selectedMeal[0]?.strArea}
                </motion.span>
              </div>
            </motion.div>

            {/* Tags */}
            {selectedMeal[0].strTags && (
              <motion.div
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                {selectedMeal[0]?.strTags?.split(",").map((tag, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2 shadow-sm hover:shadow"
                  >
                    #{tag.trim()}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Ingredients */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mb-6"
            >
              <motion.h3
                variants={slideUp}
                className="text-xl font-serif font-semibold text-amber-800 mb-3 pb-2 border-b border-amber-100"
              >
                Ingredients
              </motion.h3>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 gap-2"
              >
                {ingredients.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={slideUp}
                    whileHover={{ x: 5 }}
                    className="flex items-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-3 group-hover:shadow-md"
                    ></motion.div>
                    <span className="font-medium text-amber-900 group-hover:text-orange-700 transition-colors">
                      {item?.ingredient}
                    </span>
                    <span className="mx-2 text-amber-400">•</span>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      {item?.measure}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mt-4"
            >
              {selectedMeal[0].strYoutube && (
                <motion.button
                  variants={popIn}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(selectedMeal[0].strYoutube)}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center shadow-md hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Video
                </motion.button>
              )}
              {selectedMeal[0].strSource && (
                <motion.a
                  variants={popIn}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={selectedMeal[0].strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-amber-50 text-amber-700 border border-amber-500 font-bold py-2 px-4 rounded-lg inline-flex items-center shadow-sm hover:shadow transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Source Recipe
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Instructions Section - Full Width */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="p-6 border-t border-amber-100"
        >
          <motion.h3
            variants={slideUp}
            className="text-xl font-serif font-semibold text-amber-800 mb-4 pb-2 border-b border-amber-100"
          >
            Instructions
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-gray-700 leading-relaxed space-y-4"
          >
            {instructions.map((step, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                transition={{ delay: 0.1 * index }}
                whileHover={{ x: 5 }}
                className="flex"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mr-4 flex-shrink-0"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full font-semibold shadow-sm">
                    {index + 1}
                  </div>
                </motion.div>
                <p className="pt-1">{step.trim()}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modal for YouTube video */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex justify-center items-center bg-black/70 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              className="bg-white p-2 rounded-xl shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative pb-2">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="absolute -top-3 -right-3 bg-white text-gray-800 rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>
              <motion.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                width="100%"
                height="500"
                className="rounded-lg shadow-inner"
                src={videoUrl}
                title="YouTube Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></motion.iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default SingleDish;
