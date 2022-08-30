import React from "react";
import RecipeContainer from "./RecipeContainer";

function Mains({recipeList}) {
    return (
        <div>
            Mains
            <RecipeContainer recipeList={recipeList} />
        </div>
    )
}

export default Mains; 