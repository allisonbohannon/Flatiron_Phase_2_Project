import React, {useState} from "react";
import { useParams} from "react-router"


function EditForm({ handleEdit, recipeList, recipeId }) {

    const recipe = recipeList.find(recipe => {
        return recipe.id === recipeId
    })

    const { name, type, ingredients, instructions, id } = recipe



    const [formData, setFormData] = useState({
        name:name,
        recipeType:type,
        ingredients:ingredients.join(", "),
        instructions:instructions.join(", ")
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
        fetch(`http://localhost:3000/recipes/${id}`, { method: "PATCH", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipeObj)
      })
      .then(response => response.json())
      .then(data => handleEdit(data))
    }

    return (
        <div>
            What's Cookin Now?
            <form className="form-group" onSubmit={handleSubmit}>
                <input type="text" 
                        name="name"
                        className="form-control"  
                        onChange={handleChange} 
                        value={formData.name}>
                </input> 
                        <br></br>
                <select className="form-control" 
                        name="recipeType"
                        onChange={handleChange} 
                        value={formData.recipeType}>
                    <option value="appetizers">Appetizer</option>
                    <option value="sides">Side</option>
                    <option value="mains">Main</option>
                    <option value="desserts">Dessert</option>
                </select> 
                <br></br>
                <input type="textarea"  
                        className="form-control" 
                        name="ingredients"
                        onChange={handleChange} 
                        value={formData.ingredients}/> 
                <br></br>
                <input type="textarea"  
                        className="form-control" 
                        name="instructions"
                        onChange={handleChange} 
                        value={formData.instructions}/> 
                <br></br>
                <input type="submit"  
                        className="form-control" 
                        value="Submit"/>
            </form>
        </div>
    )
}

export default EditForm; 