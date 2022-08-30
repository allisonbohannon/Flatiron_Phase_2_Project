import React from "react";
import RecipeContainer from "./RecipeContainer";

function Appetizers({recipeList}) {
    return (
        <div>
            Appetizers
            <RecipeContainer recipeList={recipeList} />
        </div>
    )
}

export default Appetizers; 