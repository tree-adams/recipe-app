import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState([ ...RecipeData ]);

  function createRecipe(recipe) {
    setRecipes([...recipes, recipe])
  }
  //call function from RecipeCreate

 function deleteRecipe(target){
  setRecipes(recipes.filter((_,index)=> index !== target));
 }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  //Initiliaze useState
  //Reference Delete function here (remove inner html or w/e)
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  //reference the RecipeCreate function to append to existing list
  // const addRecipe = ()
  // const createRecipe=(newRecipe)=> setRecipes((//returned from RecipeCreate)=> [
  //   newRecipe,
  //   ...RecipeData,
  // ]);

  return (
    <React.Fragment>
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} recipes={recipes}/>
    </div>
    </ React.Fragment>
  );
}

export default App;

// const [userID, setUserID]= useState(1);
// const userIds = [1,2,3,4,5];
// return(
//   <div className="app">
//     {userIds.map((id)=> (
//       <button key={id} onClick={()=> setUserID(id)}>
//         User ID {id}
//       </button>
//     ))}
//     <h2>User ID {userID}</h2>
//     <ProfileData userID={userID} />
//   </div>
// );
    // }