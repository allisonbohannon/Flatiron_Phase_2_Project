import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import Container from "react-bootstrap/esm/Container";




function RandomRecipes({recipeList, setMatch, setRecipeId}) {


    const appetizers = recipeList.filter(recipe => {
        return recipe.type === "appetizers"
    }); 
    

    const sides = recipeList.filter(recipe => {
        return recipe.type === "sides"
    }); 

    const mains = recipeList.filter(recipe => {
        return recipe.type === "mains"
    }); 

    const desserts = recipeList.filter(recipe => {
        return recipe.type === "desserts"
    }); 

    const appNum = Math.floor(Math.random() * appetizers.length)
    const sidesNum = Math.floor(Math.random() * sides.length)
    const mainsNum = Math.floor(Math.random() * mains.length)
    const dessertsNum = Math.floor(Math.random() * desserts.length)

    const appetizer = appetizers[appNum]
    const side = sides[sidesNum]
    const main = mains[mainsNum]
    const dessert = desserts[dessertsNum]


    return (
        <div>
            <RecipeCard recipe={appetizer} setMatch={setMatch} setRecipeId={setRecipeId} />
            <RecipeCard recipe={side} setMatch={setMatch} setRecipeId={setRecipeId} />
            <RecipeCard recipe={main} setMatch={setMatch} setRecipeId={setRecipeId} />
            <RecipeCard recipe={dessert} setMatch={setMatch} setRecipeId={setRecipeId} />
        </div>
    )
}



export default RandomRecipes; 