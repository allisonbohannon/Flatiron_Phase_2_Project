import React, {useState, useEffect} from "react";
import { Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Appetizers from "./Appetizers"
import Sides from "./Sides"
import Mains from "./Mains"
import Desserts from "./Desserts"
import AddNew from "./AddNew";

function App() {

  const [recipeList, setRecipeList] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/recipes")
          .then(resp => resp.json())
          .then(data => setRecipeList(data))
  }, [])

  function onAdd(obj) {
    setRecipeList([...recipeList, obj])
  }

  return (
    <div >
     <NavBar />
     <Routes>
        <Route path="/appetizers" element={<Appetizers recipeList={recipeList}/>} />
        <Route path="/sides" element={<Sides recipeList={recipeList}/>} />
        <Route path="/mains" element={<Mains recipeList={recipeList}/>} />
        <Route path="/desserts" element={<Desserts recipeList={recipeList}/>} />
        <Route path="/addnew" element={<AddNew handleAdd={onAdd} />} />
        <Route path="/" element={<Home recipeList={recipeList}/>} />
      </Routes>
    </div>
  );
}

export default App;
