import Dashboard from './components/Dashboard/Dashboard';
import Homepage from './components/Homepage/Homepage';

import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [myIngredientList, setMyIngredientList] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [filterIngredients, setFilteredIngredients] = useState([]);

  const [recipes, setRecipes] = useState([]);
  //const [recipeList, setRecipeList] = useState([]);
  //const [filteredRecipes, setFilteredRecipes] = useState([]);
  const baseUrl = 'https://www.themealdb.com/api/json/v2/9973533/';



  useEffect(() => {
    return fetch(`${this.baseUrl}list.php?i=list`)
      .then((res) => res.json())
      .then((data) => {
        let ingredients = [];
        let allIngredients = [];
        for (let i = 0; i < data.meals.length; i++) {
          this.ingredients.push(data.meals[i]);
          this.allIngredients.push(data.meals[i]);
        }
        setIngredients(ingredients);
        setAllIngredients(allIngredients);
      });   
  }, [])

  const filteringIngredients = (value) => {
    const filterIngredients = allIngredients.filter(ingredient => ingredient.meals.strIngredient.toLowerCase().includes(value))
    setFilteredIngredients(filterIngredients);
  }

  const addToMyIngredientList = (ingredient) => {
    const index = myIngredientList.indexOf(ingredient);
    if (index === -1) setMyIngredientList(current => [...current, ingredient]);
    else setMyIngredientList(current => current.filter(el => el !== ingredient));  
  }

  

  const filterRecipeOptions = (list) => {
    let paramsArr = [];
    for (let i = 0; i < list.length; i++) {
      paramsArr.push(list[i].strIngredient.toLowerCase())
    }
    for (let i = 0; i < paramsArr.length; i++) {
      paramsArr[i] = paramsArr[i].replace(' ', '_');
      console.log(paramsArr.toString());  
    }
    useEffect(() => {
      return fetch(`${baseUrl}filter.php?i=${paramsArr.toString()}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.meals) {
            for (let i = 0; i < data.meals.length; i++) {
              let id = data.meals[i].idMeal;
              let recipes = options.map(data => {
              return fetch(`${this.baseUrl}lookup.php?i=${id}`)
                .then((res) => res.json())
                    
              })
            }
        }
          if (recipes) {
            Promise.all(recipes).then((res) => {
              const recipeOptions = [];
                res.forEach(el => {
                  //set parameters and try to set up to locate the ingredients that havent been listed yet
                  
                })
    
              setRecipes(recipeOptions);
              setFilteredRecipes(recipeOptions);
            })
          }
          
        }); 

    }, [])

  }
  


  return (
    <div className="App">
      <Dashboard/>
      <Homepage title={"Discover Recipes Based on your Ingredients!"} 
      
        ingredients={ingredients} filteringIngredients={filteringIngredients} myIngredientList={myIngredientList} addToMyIngredientList={addToMyIngredientList} allIngredients={filterIngredients}

        filterRecipeOptions={filterRecipeOptions}
       />
    </div>
  );
}


