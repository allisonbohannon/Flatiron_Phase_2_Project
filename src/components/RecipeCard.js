import React from "react";

function RecipeCard({ recipe }) {

    const {name, ingredients, instructions} = recipe

    const displayIngredients = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    const displayInstructions = instructions.map(instruction => {
        return <li key={instruction}>{instruction}</li>
    })

    return(
        <div>
            <h2>{name}</h2>
            <p>Ingredients</p>
            <ul>{displayIngredients}</ul>
            <p>Instructions</p>
            <ol>{displayInstructions}</ol>
        </div>
    )

}; 

export default RecipeCard; 