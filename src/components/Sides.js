import React from "react";
import RecipeContainer from "./RecipeContainer";

function Sides({recipeList, setMatch, setId}) {
    return (
        <div>
            Sides
            <RecipeContainer recipeList={recipeList} setMatch={setMatch} setId={setId} />
        </div>
    )
}

export default Sides; 