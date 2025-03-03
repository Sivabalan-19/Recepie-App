import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Random from "./pages/Random/Random";
import SingleDish from "./pages/SingleDish/SingleDish";

function App() {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Main />} />
          <Route path="random" element={<Random />} />
          {/* Adjust the path so it's directly under the Home route */}
          <Route path="/:id/:name" element={<SingleDish />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
