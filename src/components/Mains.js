import React from "react";
import RecipeContainer from "./RecipeContainer";

function Mains({recipeList, setMatch, setRecipeId}) {
    return (
        <div>
            Mains
            <RecipeContainer recipeList={recipeList} setMatch={setMatch} setRecipeId={setRecipeId} />
        </div>
    )
}

export default Mains; 