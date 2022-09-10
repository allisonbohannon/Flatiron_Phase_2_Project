import React from "react";
import RecipeContainer from "./RecipeContainer";

function Appetizers({recipeList, setMatch, setRecipeId }) {
    return (
        <div>
            Appetizers
            <RecipeContainer recipeList={recipeList} setMatch={setMatch} setRecipeId={setRecipeId} />
        </div>
    )
}

export default Appetizers; 