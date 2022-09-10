import React, {useState, useEffect} from "react";
import { Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Appetizers from "./Appetizers"
import Sides from "./Sides"
import Mains from "./Mains"
import Desserts from "./Desserts"
import AddNew from "./AddNew";
import RecipeDetail from "./RecipeDetail";

function App() {

  const [recipeList, setRecipeList] = useState([])
  const [match, setMatch] = useState({})
  const [recipeId, setRecipeId] = useState(''); 

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
        <Route path="/appetizers" element={<Appetizers 
            recipeList={recipeList}
            setMatch={setMatch}
            recipeId={recipeId}
            setRecipeId={setRecipeId}
            />} />
        <Route path="/sides" element={<Sides 
            recipeList={recipeList}
            setMatch={setMatch}
            recipeId={recipeId}
            setRecipeId={setRecipeId}
            />} />
        <Route path="/mains" element={<Mains 
            recipeList={recipeList}
            setMatch={setMatch}
            recipeId={recipeId}
            setRecipeId={setRecipeId} 
            />} />
        <Route path="/desserts" element={<Desserts 
            recipeList={recipeList}
            setMatch={setMatch}
            recipeId={recipeId}
            setRecipeId={setRecipeId}
            />} />
        <Route path="/addnew" element={<AddNew 
            handleAdd={onAdd} 
            setMatch={setMatch}
            recipeId={recipeId}
            setRecipeId={setRecipeId}
            />} />
        <Route path={`${match}/:recipeId`} element={<RecipeDetail 
            recipeList={recipeList}
            />}/>
        <Route path="/" element={<Home recipeList={recipeList}/>} />
      </Routes>
    </div>
  );
}

export default App;
