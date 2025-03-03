import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Main from "../Main/Main";
import Random from "../Random/Random";

function Home() {
  return (
    <div className="flex h-full">
      {/* Sidebar (Fixed) */}
      <Sidebar />
      {/* <Main /> */}
      <Random />
    </div>
  );
}

export default Home;
