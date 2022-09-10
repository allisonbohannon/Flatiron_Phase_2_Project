import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe, setMatch, setRecipeId,}) {

    const { name, type, ingredients, instructions, id } = recipe

    function handleClick() {
        setMatch(type)
        setRecipeId(id)
    }

    return(
        <div className="card" onClick={handleClick}>
            <h2><Link to={`/${type}/${id}`}>{name}</Link></h2>
        </div>
    )

}; 

export default RecipeCard; 