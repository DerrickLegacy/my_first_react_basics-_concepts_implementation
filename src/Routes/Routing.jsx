import React from "react";
import { Routes, Route } from "react-router-dom";

// import IOD from "../pages/IOD";
// import Customs from "../pages/Customs";
// import HomePage from "../pages/HomePage";
import Registration from "../components/login&register/Registration";
// import IAD from "../pages/IAD";
import HeaderSearchBar from "../components/searchComponent/HeaderSearchBar";
import SearchFilter from "../components/searchComponent/SearchFilter";
import Fiction from "../components/resourceDetails/Fiction";
import NoPageFoundPage from "../components/noPageFound/NoPageFoundPage";
import MainPage from "../pages/MainPage";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<HeaderSearchBar />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="*" element={<NoPageFoundPage />} />
        <Route path="/searchFilter" element={<SearchFilter />} />
      </Routes>
    </>
  );
}

export default Routing;
