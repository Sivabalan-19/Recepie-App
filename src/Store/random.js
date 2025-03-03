import { create } from "zustand";
import axios from "axios";
import { endpoint } from "../utils"; // Ensure this points to your API URL

const useMealStore = create((set) => ({
  meal: null,
  meals: [],
  loading: false,
  error: null,

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

  // Fetch 9 random meals (for the Main page)
  fetchMultipleMeals: async () => {
    set({ loading: true, error: null });

    try {
      const requests = Array.from({ length: 9 }, () =>
        axios.get(endpoint.RANDOM_MEAL)
      );
      const responses = await Promise.all(requests);
      const meals = responses.map((res) => res.data.meals[0]);

      set({ meals, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch meals", loading: false });
    }
  },
}));

export default useMealStore;
