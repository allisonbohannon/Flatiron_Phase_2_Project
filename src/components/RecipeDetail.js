import React from "react";
import { useParams} from "react-router"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function RecipeDetail({ recipeList, handleDelete }) {

    const { recipeId }  = useParams(); 
    const navigate = useNavigate();


    const recipe = recipeList.find(recipe => {
        return recipe.id === parseInt(recipeId)
    })


    const { name, type, ingredients, instructions, id } = recipe


    const displayIngredients = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    const displayInstructions = instructions.map(instruction => {
        return <li key={instruction}>{instruction}</li>
    })

    function handleDeleteRecipe() {
        fetch(`${process.env.REACT_APP_API_URL}/recipes/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(handleDelete(id))
        navigate(-1);
    }

    function handleEditRecipe() {
        navigate(`/${type}/${id}/edit`)
    }

    

    return(
        <div>
            <h2>{name}</h2>
            <p>Ingredients</p>
            <ul>{displayIngredients}</ul>
            <p>Instructions</p>
            <ol>{displayInstructions}</ol>
            <span>
                <Button onClick={handleEditRecipe}>Edit</Button>
                <Button onClick={handleDeleteRecipe}>Delete</Button>
            </span>
        </div>
    )
}

export default RecipeDetail; 