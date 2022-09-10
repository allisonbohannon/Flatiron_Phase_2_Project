import React from "react";
import { useParams, useLocation} from "react-router"
import { useHistory } from "react-router-dom";

function RecipeDetail({ recipeList, handleDelete }) {

   // const { displayType } = useLocation()
    const { recipeId }  = useParams(); 
    const history = useHistory();


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

    function handleDeleteRecipe() {
        fetch(`http://localhost:3000/recipes/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(handleDelete(id))
        history.push('/${type}');
    }

    function handleEditRecipe() {
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
                <button onClick={handleEditRecipe}>Edit</button>
                <button onClick={handleDeleteRecipe}>Delete</button>
            </span>
        </div>
    )
}

export default RecipeDetail; 