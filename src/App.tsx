import { useState } from "react";

import "./App.css";
import Navigation from "./components/navigation/navigation";
import Banner from "./components/banner/banner";
import Categories from "./components/categories/categories";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <Categories />
    </>
  );
}

export default App;
