import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeContainer({ recipeList }) {

   const displayRecipes = recipeList.map(recipe => {
    return <RecipeCard key={recipe.id} recipe={recipe}/>
    })
    

    return(
        <div>
            Recipe Container
           {displayRecipes}
        </div>
    )

}; 

export default RecipeContainer; 