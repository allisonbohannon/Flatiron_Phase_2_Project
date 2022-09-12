import React from "react";
import RecipeContainer from "./RecipeContainer";

function Appetizers({recipeList, setMatch, setRecipeId }) {
    return (
        <div>
            <RecipeContainer recipeList={recipeList} setMatch={setMatch} setRecipeId={setRecipeId} />
        </div>
    )
}

export default Appetizers; 