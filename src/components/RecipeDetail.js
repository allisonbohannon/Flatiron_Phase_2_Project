import React from "react";
import { useParams, useLocation} from "react-router"

function RecipeDetail({ recipeList, handleDelete }) {

   // const { displayType } = useLocation()
    const { recipeId }  = useParams(); 


    const recipe = recipeList.filter(recipe => {
        return recipe.id === parseInt(recipeId)
    })


    const { name, type, ingredients, instructions, id } = recipe[0]


    const displayIngredients = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    const displayInstructions = instructions.map(instruction => {
        return <li key={instruction}>{instruction}</li>
    })

    function handleDelete() {
        fetch(`http://localhost:3000/recipes/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(console.log("delete!"))
    }

    function handleEdit() {
        console.log("edit!")
    }

    

    return(
        <div>
            <h2>{name}</h2>
            <p>Ingredients</p>
            <ul>{displayIngredients}</ul>
            <p>Instructions</p>
            <ol>{displayInstructions}</ol>
            <span>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </span>
        </div>
    )
}

export default RecipeDetail; 