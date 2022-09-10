import React from "react";
import RecipeContainer from "./RecipeContainer";

function Desserts({recipeList, setMatch, setRecipeId}) {
    return (
        <div>
            Desserts
            <RecipeContainer recipeList={recipeList} setMatch={setMatch} setRecipeId={setRecipeId} />
        </div>
    )
}

export default Desserts; 