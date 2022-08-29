import React from "react";
import { Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Appetizers from "./Appetizers"
import Sides from "./Sides"
import Mains from "./Mains"
import Desserts from "./Desserts"

function App() {
  return (
    <div >
     <NavBar />
     <Routes>
        <Route path="/appetizers" element={<Appetizers />} />
        <Route path="/sides" element={<Sides />} />
        <Route path="/mains" element={<Mains />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
