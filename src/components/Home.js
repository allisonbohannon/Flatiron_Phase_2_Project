import React from "react";
import RecipeContainer from "./RecipeContainer";

function Home({ recipeList }) {
 
    return (
        <div>
            Why don't you make something yummy
            <RecipeContainer recipeList={recipeList} />
         
        </div>
    )
}

export default Home; 