import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function AddNew({ handleAdd }) {

    const [formData, setFormData] = useState({
        name:"",
        recipeType:"appetizers",
        ingredients:"",
        instructions:""
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
            ingredients:formData.ingredients.split(", "),
            instructions:formData.instructions.split(", "),
        }
        fetch(`${process.env.REACT_APP_API_URL}/recipes`, { method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipeObj)
      })
      .then(response => response.json())
      .then(data => handleAdd(data))

      setFormData({
        name:"",
        recipeType:"",
        ingredients:"",
        instructions:""
      })
    }

    return (
        <Container>
            What's Cookin Now?
            <Form className="mb-3" onSubmit={handleSubmit}>
                <Form.Control type="text" 
                        name="name" 
                        placeholder="recipe name" 
                        onChange={handleChange} 
                        value={formData.name}>
                </Form.Control> 
                        <br></br>
                <Form.Select 
                        name="recipeType"
                        placeholder="recipe type" 
                        onChange={handleChange} 
                        value={formData.recipeType}>
                    <option value="appetizers">Appetizer</option>
                    <option value="sides">Side</option>
                    <option value="mains">Main</option>
                    <option value="desserts">Dessert</option>
                </Form.Select> 
                <br></br>
                <Form.Control as="textarea"  
                        name="ingredients"
                        rows={5} 
                        placeholder="ingredients" 
                        onChange={handleChange} 
                        value={formData.ingredients}/> 
                <br></br>
                <Form.Control as="textarea"  
                        name="instructions"
                        rows={5} 
                        placeholder="instructions"
                        onChange={handleChange} 
                        value={formData.instructions}/> 
                <br></br>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default AddNew; 