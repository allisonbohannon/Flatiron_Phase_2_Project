import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';



function RecipeCard({ recipe, setMatch, setRecipeId,}) {

    const { name, type, ingredients, instructions, id } = recipe

    function handleClick() {
        setMatch(type)
        setRecipeId(id)
    }

    return(
        <Card onClick={handleClick}
        style={{ margin: '2rem' }} >
            <h2><Link to={`/${type}/${id}`}>{name}</Link></h2>
        </Card>
    )

}; 

export default RecipeCard; 