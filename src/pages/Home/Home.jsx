import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div className="flex h-full">
      {/* Sidebar (Fixed) */}
      <Sidebar />

      <Outlet />
    </div>
  );
}

export default Home;
