import React from 'react'
import Item from '../Item/Item.js';
import './styles.css';

function ListItems({ingredients, addToIngredientList, title}) {
  return (
    ingredients.length ? 
    <div className="discover">
      <h2>{title}</h2>
      <div className="itemList">
        {
          ingredients.map(ingredient => (
            <Item addToIngredientList={addToIngredientList} ingredient={ingredient} key={ingredient.idIngredient}/>
          ))
        }
      </div>
    </div>
    : null
  )
}

export default ListItems;
