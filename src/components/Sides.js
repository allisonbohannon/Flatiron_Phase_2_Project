import React from "react";
import RecipeContainer from "./RecipeContainer";

function Sides({recipeList, setMatch, setRecipeId}) {
    return (
        <div>
            <RecipeContainer recipeList={recipeList} setMatch={setMatch} setRecipeId={setRecipeId} />
        </div>
    )
}

export default Sides; 