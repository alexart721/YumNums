export interface Meals {
  meals: Ingredient[]
}


export interface Ingredient {
  idIngredient: string,
  strIngredient: string,
  strDescription: string,
}
export interface Menu {
  id: string;
  name: string;
  area: string;
  instructions: string;
  thumbNail: string;
  youtube: string;
  ingredientMeasurments: ingredientMeasurments[];
}
export interface ingredientMeasurments {

}

export interface Recipe {
  idMeal: string,
  strMeal: string,
  //strDrinkAlternate: string | null,
  strCategory: string,
  strArea: string,
  strInstructions: string,
  strMealThumb: string,
  strYoutube: string,
  strIngredient1: string,
  strIngredient2: string,
  strIngredient3: string,
  strIngredient4: string | null,
  strIngredient5: string | null,
  strIngredient6: string | null,
  strIngredient7: string | null,
  strIngredient8: string | null,
  strIngredient9: string | null,
  strIngredient10: string | null,
  strIngredient11: string | null,
  strIngredient12: string | null,
  strIngredient13: string | null,
  strIngredient14: string | null,
  strIngredient15: string | null,
  strIngredient16:  string | null,
  strIngredient17:  string | null,
  strIngredient18:  string | null,
  strIngredient19:  string | null,
  strIngredient20:  string | null,
  strMeasure1: string,
  strMeasure2: string,
  strMeasure3: string,
  strMeasure4: string,
  strMeasure5: string,
  strMeasure6: string,
  strMeasure7: string,
  strMeasure8: string,
  strMeasure9: string,
  strMeasure10: '',
  strMeasure11: '',
  strMeasure12: '',
  strMeasure13: '',
  strMeasure14: '',
  strMeasure15: '',
  strMeasure16:  string | null,
  strMeasure17:  string | null,
  strMeasure18:  string | null,
  strMeasure19:  string | null,
  strMeasure20:  string | null,
  //strImageSource: null,
}



