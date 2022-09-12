import React from "react";
import { useParams} from "react-router"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function RecipeDetail({ recipeList, handleDelete }) {

    const { recipeId }  = useParams(); 
    const navigate = useNavigate();


    const recipe = recipeList.find(recipe => {
        return recipe.id === parseInt(recipeId)
    })


    const { name, type, ingredients, instructions, id, imgurl } = recipe


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
        navigate(`../${type}`);
    }

    function handleEditRecipe() {
        navigate(`/${type}/${id}/edit`)
    }

    

    return(
        <Card style={{padding:"1rem", width:'45rem'}}>
            <Card.Img src={imgurl}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Ingredients</Card.Text>
                <ul>{displayIngredients}</ul>
                <Card.Text>Instructions</Card.Text>
                <ol>{displayInstructions}</ol>
            </Card.Body>
           
            <span>
                <Button onClick={handleEditRecipe}
                        style={{margin: '2rem'}}
                        >
                     Edit
                </Button>
                <Button onClick={handleDeleteRecipe}
                        style={{margin: '2rem'}}
                        >Delete
                </Button>
            </span>
        </Card>
    )
}

export default RecipeDetail; 