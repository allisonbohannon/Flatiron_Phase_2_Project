import React, {useState} from "react";

function AddNew({ handleAdd }) {
    const [formData, setFormData] = useState({
        name:"",
        recipeType:"",
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
            recipeType:formData.recipeType,
            ingredients:formData.ingredients,
            instructions:formData.instructions,
        }
        fetch("http://localhost:3000/recipes", { method: "POST", 
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
        <div>
            What's Cookin Now?
            <form className="form-group" onSubmit={handleSubmit}>
                <input type="text" 
                        name="name"
                        className="form-control"  
                        placeholder="recipe name" 
                        onChange={handleChange} 
                        value={formData.name}>
                </input> 
                        <br></br>
                <select className="form-control" 
                        name="recipeType"
                        placeholder="recipe type" 
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
                        placeholder="ingredients" 
                        onChange={handleChange} 
                        value={formData.ingredients}/> 
                <br></br>
                <input type="textarea"  
                        className="form-control" 
                        name="instructions"
                        placeholder="instructions"
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

export default AddNew; 