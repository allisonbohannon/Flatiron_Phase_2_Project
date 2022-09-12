import React, { useState } from "react";
import RandomRecipes from "./RandomRecipes";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";



function Home({ recipeList, setMatch, setRecipeId, }) {

    const [toggle, setToggle] = useState(false); 

    function handleClick() {
        setToggle(toggle => !toggle)
    }

 
    return (
        <Container className='justify-content-center'>
            <Button onClick={handleClick}
                style={{margin: '2em'}}
                
                >Need ideas? </Button>
            {toggle? <RandomRecipes recipeList={recipeList} setMatch={setMatch} setRecipeId={setRecipeId}/> : ""}
        </Container>
    )
}

export default Home; 