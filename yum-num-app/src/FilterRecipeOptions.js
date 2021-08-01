import React from 'react'

function FilterRecipeOptions ({list}) {


  let paramsArr = [];
  for (let i = 0; i < list.length; i++) {
    paramsArr.push(list[i].strIngredient.toLowerCase())
  }
  for (let i = 0; i < paramsArr.length; i++) {
    paramsArr[i] = paramsArr[i].replace(' ', '_');
    console.log(paramsArr.toString());  
  }


  




  
}

export default filterRecipeOptions;

