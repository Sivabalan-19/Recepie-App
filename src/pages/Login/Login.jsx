import { Box } from "@mui/joy";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="loginfull flex justify-center items-center min-h-screen px-4">
      <Box className="w-full max-w-md text-center">
        <div className="text-2xl sm:text-4xl font-normal text-[#fa5514]">
          Crafting flavors, one recipe at a time.
        </div>
        <div className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-600">
          Explore a world of flavors with easy-to-follow recipes, handpicked for
          every occasion. Whether you're a beginner or a seasoned chef, find the
          perfect dish to satisfy your cravings. Cook, create, and enjoy
          delicious homemade meals with simple ingredients and step-by-step
          guidance.
        </div>
        <button
          className="mt-8 sm:mt-10 text-white rounded-[4px] bg-[#fa5514] px-8 py-3 sm:px-10 sm:py-4"
          onClick={() => navigate("/home")}
        >
          Get Started
        </button>
      </Box>
    </div>
  );
}

export default Login;
