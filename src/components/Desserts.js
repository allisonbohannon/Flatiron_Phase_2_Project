import React from "react";
import RecipeContainer from "./RecipeContainer";

function Desserts({recipeList}) {
    return (
        <div>
            Desserts
            <RecipeContainer recipeList={recipeList} />
        </div>
    )
}

export default Desserts; 