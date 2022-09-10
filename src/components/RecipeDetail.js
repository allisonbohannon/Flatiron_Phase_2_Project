import React from "react";
import { useParams, useLocation} from "react-router"

function RecipeDetail({ recipeList }) {

   // const { displayType } = useLocation()
    const { recipeId }  = useParams(); 


    const recipe = recipeList.filter(recipe => {
        return recipe.id === parseInt(recipeId)
    })



    const { name, type, ingredients, instructions, id } = recipe[0]

    console.log(typeof ingredients)

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
}

export default RecipeDetail; 