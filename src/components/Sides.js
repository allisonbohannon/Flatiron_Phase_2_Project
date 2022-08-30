import React from "react";
import RecipeContainer from "./RecipeContainer";

function Sides({recipeList}) {
    return (
        <div>
            Sides
            <RecipeContainer recipeList={recipeList} />
        </div>
    )
}

export default Sides; 