import axios from "axios";
import { useState, useEffect } from "react";
// IMPORTO REACT-ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
// IMPORTO PAGINE

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AbousUs";
import PageNotFound from "./pages/PageNotFound";
import ListRecipe from "./pages/ListRecipe";
import AddRecipe from "./pages/AddRecipe";
import DefLayout from "./layouts/DefLayout";
import Recipe from "./pages/Recipe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/ListRecipe" element={<ListRecipe />} />
          <Route path="/ListRecipe/:id" element={<Recipe />} />
          <Route path="/AddRecipe" element={<AddRecipe />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
