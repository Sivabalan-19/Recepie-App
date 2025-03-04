import { SearchX } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AutocompleteInput from "../../components/Autocomplete/Autocomplete";
import SearchBar from "../../components/Search/Search";
import useMealStore from "../../Store/random";

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

  const navigate = useNavigate();
  console.log(selectedCategory, selectedArea, selectedIngridient);
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
  }, []);

  console.log(selectedCategory, selectedArea, selectedIngridient);
  return (
    <div className="flex-1 p-4 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-orange-800">
      <div className="justify-end flex w-full">
        <SearchBar query={search} callfuntion={fetchSearchMeal} />
      </div>

      <div className="flex flex-wrap justify-between mt-6 gap-4">
        {/* {CategoriesList&& IngridientsList &&AreaList && ( */}
        <AutocompleteInput
          header={"Categories"}
          value={selectedCategory}
          dotvalue={`strCategory`}
          funtionCall={fetchByCategory}
          dropdownvalue={CategoriesList}
        />
        <AutocompleteInput
          header={"Ingridients"}
          dotvalue={`strIngredient`}
          value={selectedIngridient}
          funtionCall={fetchByIngridients}
          dropdownvalue={IngridientsList}
        />
        <AutocompleteInput
          header={"Area"}
          dotvalue={`strArea`}
          funtionCall={fetchByArea}
          dropdownvalue={AreaList}
          value={selectedArea}
        />
        {/* )} */}
      </div>

      <div className="text-2xl font-bold text-orange-800 mt-6 mb-4 pb-2 border-b-2 border-orange-500">
        {search
          ? `Seach Result for ${search}`
          : !search
          ? "Explore Latest Meals"
          : ""}
      </div>
      {loading ? (
        // Skeleton Loader when loading
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(6)].map(
            (
              _,
              index // Show 6 skeleton cards as an example
            ) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-200 animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300"></div>{" "}
                {/* Skeleton image */}
                <div className="p-4">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>{" "}
                  {/* Skeleton title */}
                  <div className="w-full h-10 bg-gray-300 rounded"></div>{" "}
                  {/* Skeleton button */}
                </div>
              </div>
            )
          )}
        </div>
      ) : meals ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meals.map((meal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-200"
            >
              <img
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
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                      {meal?.strCategory}
                    </span>
                  )}
                  {meal.strArea && (
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {meal?.strArea}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  className="mt-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={() => {
                    navigate(`/${meal.idMeal}/${meal.strMeal}`);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <div className="bg-orange-100 rounded-full p-6 mb-6">
            <SearchX size={64} className="text-orange-500" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            No recipes found
          </h2>

          {search && (
            <p className="text-gray-600 mb-6">
              We couldn't find any recipes matching "
              <span className="font-medium text-orange-500 italic ">
                {search}
              </span>
              "
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              onClick={() => {
                changevalue("search", ""); // Clear the search state in the Zustand store
                fetchSearchMeal(""); // Clear the search results
              }}
            >
              Clear Search
            </button>
          </div>

          <div className="mt-8 p-4 bg-orange-50 rounded-lg max-w-md">
            <h3 className="font-semibold mb-2 text-gray-700">Suggestions:</h3>
            <ul className="text-gray-600 text-left pl-4">
              <li className="mb-1">• Check your spelling</li>
              <li className="mb-1">• Try more general keywords</li>
              <li className="mb-1">• Try a different search term</li>
              <li>• Browse our categories for inspiration</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
