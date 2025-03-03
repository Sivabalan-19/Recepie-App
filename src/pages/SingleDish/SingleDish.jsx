import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Search/Search";
import useMealStore from "../../Store/random";
import { RandomSkeleton } from "../../utils/Skleton";
import { useParams } from "react-router-dom";

function SingleDish() {
  const { id, name } = useParams();
  const { selectedMeal, loading, fetchMealById} = useMealStore();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [videoUrl, setVideoUrl] = useState(""); // State to store the video URL


  useEffect(() => {
    fetchMealById(id);
  }, [id]); // Added `id` as dependency to fetch the meal when `id` changes

  // Function to open modal with video URL
  const openModal = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0]; // Extract the video ID from the URL
    const embedUrl = `https://www.youtube.com/embed/${videoId}`; // Create the embed URL
    setVideoUrl(embedUrl); // Set the embed URL
    setIsModalOpen(true); // Open the modal
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setVideoUrl(""); // Clear the video URL
  };


  if (loading || !selectedMeal) {
    return (
      <div className="flex-1 p-4 h-screen overflow-y-scroll">
        <div className="text-2xl font-bold text-orange-800 mt-6 mb-4 pb-2 border-b-2 border-orange-500">
          Today's Dish
        </div>
        <div className="text-center mt-6">
          <RandomSkeleton />
        </div>
      </div>
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
    ? selectedMeal[0].strInstructions.split("\r\nSTEP")
    : [];

  return (
    <div className="flex-1 p-4 h-screen overflow-y-scroll">
      <div className="text-2xl font-bold text-orange-800 mt-6 mb-4 pb-2 border-b-2 border-orange-500">
        Today's Dish
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-200">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={selectedMeal[0]?.strMealThumb}
              alt={selectedMeal[0]?.strMeal}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-orange-800 mb-2">
              {selectedMeal[0]?.strMeal}
            </h2>
            <div className="flex mb-4">
              <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                {selectedMeal[0]?.strCategory}
              </span>
              <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                {selectedMeal[0]?.strArea}
              </span>
            </div>
            {selectedMeal[0].strTags && (
              <div className="mb-4">
                {selectedMeal[0]?.strTags?.split(",").map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-orange-100 text-orange-600 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2"
                  >
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                Ingredients
              </h3>
              <ul className="list-disc pl-5">
                {ingredients.map((item, index) => (
                  <li key={index} className="mb-1">
                    <span className="font-medium">{item.ingredient}</span> -{" "}
                    {item.measure}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              {selectedMeal[0].strYoutube && (
                <button
                  onClick={() => openModal(selectedMeal[0].strYoutube)} // Open modal with video URL
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  Watch Video
                </button>
              )}
              {selectedMeal[0].strSource && (
                <a
                  href={selectedMeal[0].strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-orange-600 border border-orange-600 font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  Source Recipe
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-orange-200">
          <h3 className="text-xl font-semibold text-orange-700 mb-4">
            Instructions
          </h3>
          <div className="text-gray-700 leading-relaxed">
            <ol className="list-decimal pl-6">
              {instructions.map((step, index) => (
                <li key={index} className="mb-2">
                  {step.trim()}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Modal for YouTube video */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-1 rounded-lg shadow-lg w-3/4 md:w-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <iframe
              width="100%"
              height="400"
              style={{ borderRadius: "10px" }}
              src={videoUrl}
              title="YouTube Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleDish;
