import React, {useState} from "react";

function AddNew() {
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

    return (
        <div>
            What's Cookin Now?
            <form>
                <input type="text" placeholder="recipe name" onChange={handleChange} value={formData.name}></input> <br></br>
                <select placeholder="recipe type" onChange={handleChange} value={formData.recipeType}>
                    <option value="appetizers">Appetizer</option>
                    <option value="sides">Side</option>
                    <option value="mains">Main</option>
                    <option value="desserts">Dessert</option>
                </select> <br></br>
                <input type="textarea" placeholder="ingredients" onChange={handleChange} value={formData.ingredients}/>  <br></br>
                <input type="textarea" placeholder="instructions"onChange={handleChange} value={formData.instructions}/> <br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default AddNew; 