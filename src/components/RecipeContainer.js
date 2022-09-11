import React from "react";
import { useLocation } from "react-router";
import RecipeCard from "./RecipeCard";
import Container from 'react-bootstrap/Container';

function RecipeContainer({ recipeList, setMatch, setRecipeId }) {

   const location = useLocation(); 

   const filterType = location.pathname.slice(1).toLowerCase()

   const displayRecipes = recipeList
   .filter(recipe => {
    return recipe.type === filterType; 
   })
   .map(recipe => {
    return <RecipeCard key={recipe.id} recipe={recipe} setMatch={setMatch} setRecipeId={setRecipeId}/>
    })
    

    return(
        <Container>
           {displayRecipes}
        </Container>
    )

}; 

export default RecipeContainer; 