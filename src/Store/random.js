import { create } from "zustand";
import axios from "axios";
import { endpoint } from "../utils"; // Ensure this points to your API URL

const useMealStore = create((set, get) => ({
  meal: null,
  selectedMeal: null,
  meals: [],
  search: "",
  loading: false,
  error: null,

  changevalue: (variable, value) => {
    set({ [variable]: value });
  },

  // Fetch a single random meal (for the Random page)
  fetchRandomMeal: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(endpoint.RANDOM_MEAL);
      if (response?.data?.meals && response.data.meals.length > 0) {
        const mealData = response.data.meals[0];

        // Extract ingredients
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = mealData[`strIngredient${i}`];
          const measure = mealData[`strMeasure${i}`];

          if (ingredient && ingredient.trim() !== "") {
            ingredients.push({ ingredient, measure: measure || "" });
          }
        }

        // Process instructions
        const instructionSteps = mealData.strInstructions
          ? mealData.strInstructions
              .split(/\r?\n/)
              .filter((step) => step.trim() !== "")
          : ["No instructions available."];

        set({
          meal: { ...mealData, ingredients, instructionSteps },
          loading: false,
        });
      } else {
        set({ error: "No meal data received", loading: false });
      }
    } catch (err) {
      set({
        error: err.message || "Failed to fetch meal data",
        loading: false,
      });
    }
  },

  // fetch by Name
  fetchMealById: async (id) => {
    set({ loading: true, error: null });
    try {
      const searchResponse = await axios.get(`${endpoint.ID_MEAL}${id}`);
      set({ selectedMeal: searchResponse.data.meals, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch meals", loading: false });
    }
  },
  fetchSearchMeal: async (searchTerm) => {
    set({ loading: true, error: null });
    const { search } = get();

    try {
      // First, request for a specific meal search (e.g., chicken)
      const searchUrl = `${endpoint.SEARCH_MEAL}${search}`; // Dynamically construct the search URL
      const searchResponse = await axios.get(searchUrl);
      const meals = searchResponse.data.meals;

      set({ meals, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch meals", loading: false });
    }
  },
}));

export default useMealStore;
