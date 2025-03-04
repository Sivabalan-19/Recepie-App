import axios from "axios";
import { create } from "zustand";
import { endpoint } from "../utils"; // Ensure this points to your API URL

const useMealStore = create((set, get) => ({
  meal: null,
  selectedMeal: null,
  meals: [],
  search: "",

  CategoriesList: null,
  AreaList: null,
  IngridientsList: null,

  selectedCategory: null,
  selectedArea: null,
  selectedIngridient: null,

  loading: false,
  error: null,

  changevalue: (variable, value, dropdownstate) => {
    console.log(variable);
    if (dropdownstate === "Categories") {
      set({
        selectedCategory: value,
        selectedArea: null,
        selectedIngridient: null,
      });
    } else if (dropdownstate === "Area") {
      set({
        selectedArea: value,
        selectedCategory: null,
        selectedIngridient: null,
      });
    } else if (dropdownstate === "Ingridients") {
      set({
        selectedIngridient: value,
        selectedCategory: null,
        selectedArea: null,
      });
    } else if (dropdownstate === "Search") {
      set({
        search: value,
        selectedCategory: null,
        selectedArea: null,
        selectedIngridient: null,
      });
    } else {
      set({ [variable]: value });
    }
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

  fetchCategoryList: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${endpoint.CATEGORIES}`);
      set({ CategoriesList: response.data.meals, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch meals", loading: false });
    }
  },

  fetchAreaList: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${endpoint.AREA}`);
      set({ AreaList: response.data.meals, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch meals", loading: false });
    }
  },

  fetchIngridientsList: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${endpoint.INGRIDIENTS}`);
      set({ IngridientsList: response.data.meals, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch meals", loading: false });
    }
  },
  fetchByCategory: async (value) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        value
          ? `${endpoint.GET_BY_CATEGORY}${value?.strCategory}`
          : `${endpoint.SEARCH_MEAL}`
      );
      set({ meals: response.data.meals, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch meals", loading: false });
    }
  },
  fetchByIngridients: async (value) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        value
          ? `${endpoint?.GET_BY_INGRIDIENT}${value?.strIngredient}`
          : `${endpoint?.GET_BY_INGRIDIENT}`
      );
      set({ meals: response.data.meals, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch meals", loading: false });
    }
  },
  fetchByArea: async (value) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        value
          ? `${endpoint?.GET_BY_AREA}${value?.strArea}`
          : `${endpoint.SEARCH_MEAL}`
      );
      set({ meals: response.data.meals, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch meals", loading: false });
    }
  },
}));

export default useMealStore;
