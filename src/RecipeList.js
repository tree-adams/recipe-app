import React from "react";
import RecipeItem from './RecipeItem';

function RecipeList({deleteRecipe, recipes}) {

  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <React.Fragment>
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
      {recipes.map((recipe, index)=>{
          return <RecipeItem recipe={recipe} key={index} handleDeleteClick={()=>{deleteRecipe(index)}}
          /> 
        })}
        </tbody>
      </table>
    </div>
    </ React.Fragment>
  );
}

export default RecipeList;
