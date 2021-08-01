import React from 'react'
import './styles.css';

function Item({ingredient, addToIngredientList}) {
  return (
    <div className="allIngredientWrapper">
    
      <button onClick={() => addToIngredientList(ingredient)}>{ingredient.strIngredient}
      </button>
          
    </div>
  )
}

export default Item;
