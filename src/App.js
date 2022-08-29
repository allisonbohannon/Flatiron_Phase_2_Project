import React from "react";
import { Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import Appetizers from "./components/Appetizers"
import Sides from "./components/Sides"
import Mains from "./components/Mains"
import Desserts from "./components/Desserts"

function App() {
  return (
    <div >
     <NavBar />
     <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/appetizers" element={<Appetizers />} />
          <Route path="/sides" element={<Sides />} />
          <Route path="/mains" element={<Mains />} />
          <Route path="/desserts" element={<Desserts />} />
        </Routes>
    </div>
  );
}

export default App;
