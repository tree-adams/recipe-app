import React, { useState } from "react";

function RecipeCreate({createRecipe, recipes}) {
  const form =[
    {
    name: '',
    cuisine: '',
    photo:'',
    ingredients:'',
    preparation:'',
  }]
  
const [formData, setFormData] = useState(form);

const handleChange = (event) => {
  const {target} = event;
  setFormData({
    ...formData,
    [target.name]: target.value,
  });
};
  
function handleSubmit(event) {
  event.preventDefault();
  createRecipe(formData);
  event.target.reset();
    setFormData(form);
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
 
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor='name' />
              <input 
              id="name"
              type="text" 
              name="name"
              onChange={handleChange}
            placeholder="Name"
            required
              />
              
            </td>
            <td>
            <label htmlFor='cuisine' />
              <input 
              id="cuisine"
              type="text" 
              name="cuisine"
              onChange={handleChange}
             placeholder="Cuisine"
              />
            </td>
            <td>
            <label htmlFor="url" />
              <input 
              id="url"
              type="url" 
              name="photo" 
              onChange={handleChange}
              placeholder="URL"
              required
              />
            </td>
            <td>
            <label htmlFor="ingredients" />
              <textarea 
              id="ingredients"
             name="ingredients" 
             onChange={handleChange}
              placeholder="Ingredients"
              />
            </td>
            <td>
            <label htmlFor="preparation" />
              <textarea 
              id="preparation"
              name="preparation" 
              onChange={handleChange}
              placeholder="Preparation"
              />
            </td>
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
