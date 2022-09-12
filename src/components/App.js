import React, {useState, useEffect} from "react";
import { Route, Routes} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home"
import Appetizers from "./Appetizers"
import Sides from "./Sides"
import Mains from "./Mains"
import Desserts from "./Desserts"
import AddNew from "./AddNew";
import RecipeDetail from "./RecipeDetail";
import EditForm from "./EditForm";

function App() {

  const [recipeList, setRecipeList] = useState([])
  const [match, setMatch] = useState({})
  const [recipeId, setRecipeId] = useState(''); 

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/recipes`)
        .then(resp => resp.json())
        .then(data => setRecipeList(data))
}, [])


  function onAdd(obj) {
    setRecipeList([...recipeList, obj])
  }

  function onDelete(id) {
   
    const updatedRecipeList= recipeList.filter(recipe => {
      return (recipe.id !== id)
    })
    
    setRecipeList(updatedRecipeList)
  }

  function onEdit(newRecipe) {
    const updatedRecipeList= recipeList.map(recipe => {
      if (recipe.id === newRecipe.id) { 
        console.log('Updating')
        return newRecipe
      } else {
        return recipe}
      }
    )
    setRecipeList(updatedRecipeList)
  }


  return (
    <div >
     <NavigationBar />
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
            handleDelete={onDelete}
            handleEdit={onEdit}
            />}/>
        <Route path={`${match}/${recipeId}/edit`} element={<EditForm 
            recipeList={recipeList}
            recipeId={recipeId}
            handleEdit={onEdit}
            />}/>
          <Route path="/" element={<Home recipeList={recipeList}
             setMatch={setMatch}
             setRecipeId={setRecipeId}
             setRecipeList={setRecipeList}
          />} />
      </Routes>
    </div>
  );
}

export default App;
