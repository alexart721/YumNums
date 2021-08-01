import React from 'react'
import './styles.css';
import DiscoverRecipes from '../DiscoverRecipes/DiscoverRecipes';

export default function Homepage ({ingredients, ingredientList, addToIngredientList, filteredIngredients}) {
  return (
    <div className="Homepage">

      <DiscoverRecipes title={"Discover Recipes Based on your Ingredients!"} ingredients={ingredients} ingredientList={ingredientList} addToIngredientList={addToIngredientList} filteredIngredients={filteredIngredients}/>

      <DiscoverRecipes title={"Discover Recipes Based Country!"}/>

    </div>
  )
}

