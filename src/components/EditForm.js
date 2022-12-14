import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";



function EditForm({ handleEdit, recipeList, recipeId }) {

    const navigate = useNavigate()

    const recipe = recipeList.find(recipe => {
        return recipe.id === recipeId
    })

    const { name, type, ingredients, instructions, id, imgurl } = recipe



    const [formData, setFormData] = useState({
        name:name,
        recipeType:type,
        imgurl:imgurl,
        ingredients:ingredients.join("; "),
        instructions:instructions.join("; ")
    })

    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
          });
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        const newRecipeObj= {
            name:formData.name,
            type:formData.recipeType,
            imgurl:formData.imgurl,
            ingredients:formData.ingredients.split("; "),
            instructions:formData.instructions.split("; "),
        }

        fetch(`${process.env.REACT_APP_API_URL}/recipes/${id}`, { 
            method: "PATCH", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRecipeObj)
             })
         .then(response => response.json())
         .then(data => handleEdit(data))

         navigate(-1)
    }

    return (
        <Container>
            <Form className="mb-3" onSubmit={handleSubmit}>
                <Form.Control type="text" 
                        name="name"
                        onChange={handleChange} 
                        value={formData.name}>
                </Form.Control> 
                        <br></br>

                <Form.Control type="text" 
                        name="imgurl"
                        onChange={handleChange} 
                        value={formData.imgurl}>
                </Form.Control> 
                    <br></br>
                <Form.Select 
                        name="recipeType"
                        onChange={handleChange} 
                        value={formData.recipeType}>
                    <option value="appetizers">Appetizer</option>
                    <option value="sides">Side</option>
                    <option value="mains">Main</option>
                    <option value="desserts">Dessert</option>
                </Form.Select> 
                <br></br>
                <Form.Control as="textarea" 
                        rows={5}
                        name="ingredients"
                        onChange={handleChange} 
                        value={formData.ingredients}/> 
                <p><em>Separate ingredients with a ";"</em></p>
                <br></br>
                <Form.Control as="textarea" 
                        rows={5} 
                        name="instructions"
                        onChange={handleChange} 
                        value={formData.instructions}/>
                <p><em>Separate instructions with a ";"</em></p>      
                <br></br>
              
                <Button type="submit">Submit</Button>
                        
            </Form>
        </Container>
    )
}

export default EditForm; 