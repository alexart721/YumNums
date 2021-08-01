import React from 'react'
import { useState, useEffect } from 'react';
import Recipe from '../Recipe/Recipe';
import './styles.css';



function ListRecipes() {

  const [recipes, setRecipes] = useState([]);
  const baseUrl = 'https://www.themealdb.com/api/json/v2/9973533/';
  let recipeOptions = [];
  let recipe = {};

  useEffect(() => { 
    
    function filterRecipeOptions(list) {
      fetch(`${baseUrl}filter.php?i=${paramsArr.toString()}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.meals) {
            for (let i = 0; i < data.meals.length; i++) {
              let id = data.meals[i].idMeal;
              let recipes = options.map(data => {
              return fetch(`${this.baseUrl}lookup.php?i=${id}`)
                .then((res) => res.json())
                .then((data) => {
                  function transformData(data) {
                    recipe.id = data.idMeal;
                    recipe.name = data.strMeal;
                    recipe.area = data.strArea;
                    recipe.category = data.strCategory;
                    recipe.instructions = data.strInstructions;
                    recipe.thumbNail = data.strMealThumb;
                    recipe.youtube = data.strYoutube;
                    for (let key in data) {
                      if (data[key]?.includes('strIngredient') ) {
                        let num = data[key]?.split('strIngredient')[1];
                        let ingredient = data['strIngredient' + num];
                        let measurement = data['strMeasure' + num];
                        ingredient !== " " && ingredient !== null && (this.recipe.ingredientMeasurments[ingredient] = measurement);
                      }
                    } 
                    return recipe;
                  }
                
              })
            })
           
          if (recipes) {
          Promise.all(recipes).then((res) => {
              res.forEach(el => {
                //set parameters and try to set up to locate the ingredients that havent been listed yet
                
              })
  
            setRecipes(recipeOptions);
          })
        }
        
      }); 

    } return recipeOptions;
  }}, [])

  const removeRecipe = recipe => {

  }
  const viewRecipe = recipe => {

  }


  return (
    recipeOptions.length ? 
      <div className="recipeList">
          {
            recipeOptions.map(recipe => (
              <div key={recipe.id}>
                <h2>{recipe.name}</h2>
                <span>{recipe.area}</span>
                <div className="ingredientsNeeded">
                {
                  recipe.ingredientMeasurments.map(el => (
                    for (let [key, value] of Object.entries(el)) {
                      let ingredient = key;
                      let measurement = value; 
                    }
                    <span></span>
                  ))
                }
                </div>
                <button onClick={() => removeRecipe(recipe)}>No</button>
                <button onClick={() => viewRecipe(recipe, true)}>Yes</button>  
              </div>
            ))
          
          }
      </div>
    : <span>None Found, Try searching with less items</span>
  )
}
}
}
export default ListRecipes
