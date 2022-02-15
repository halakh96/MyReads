import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes>
    </div>
  );
};

export default App;
