import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';



function RecipeCard({ recipe, setMatch, setRecipeId,}) {

    const { name, type, ingredients, instructions, id, imgurl } = recipe

    function handleClick() {
        setMatch(type)
        setRecipeId(id)
    }

    const displayIngredients = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    return(
        <Card onClick={handleClick}
              style={{ margin: '2rem', padding: '1em', width:"24rem"}}
              cols={2} >
            <Card.Body>
                <Card.Img  variant="bottom" src={imgurl}/>
                <Card.Title>
                    <Link to={`/${type}/${id}`}>{name}</Link>
                </Card.Title>
                <Card.Text>Requires:</Card.Text>
                <Card.Text>
                    {displayIngredients}
                </Card.Text>
            </Card.Body>
           
        </Card>
    )

}; 

export default RecipeCard; 