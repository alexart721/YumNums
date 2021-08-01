export interface IRecipe {
  id: string;
  name: string;
  area: string;
  category: string;
  instructions: string;
  thumbNail: string;
  youtube: string;
  ingredientMeasurments:{[key: string]: string | null}
  parse: (data: IRecipes) => void;
}

export class Recipe implements IRecipe {
  id: string;
  name: string;
  area: string;
  category: string;
  instructions: string;
  thumbNail: string;
  youtube: string;
  ingredientMeasurments: {[key: string]: string | null};
  constructor() {
    this.id = '';
    this.name = '';
    this.area = '';
    this.category = '';
    this.instructions = '';
    this.thumbNail = '';
    this.youtube = '';
    this.ingredientMeasurments = {};
  }
  parse (data:IRecipes) {
    this.id = data.idMeal;
    this.name = data.strMeal;
    this.area = data.strArea;
    this.category = data.strCategory;
    this.instructions = data.strInstructions;
    this.thumbNail = data.strMealThumb;
    this.youtube = data.strYoutube;
    for (let key in data) {
      if (data[key]?.includes('strIngredient') ) {
        let num = data[key]?.split('strIngredient')[1];
        let ingredient = data['strIngredient' + num];
        let measurement = data['strMeasure' + num];
        ingredient !== " " && ingredient !== null && (this.ingredientMeasurments[ingredient] = measurement);
      }
    }
    
  }
  //rename id, name, etc from Irecipes
}
// recipe = new Recipe()
// recipe.parse(bigResponse)

export interface IRecipes {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16:  string | null;
  strIngredient17:  string | null;
  strIngredient18:  string | null;
  strIngredient19:  string | null;
  strIngredient20:  string | null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeasure16:  string | null;
  strMeasure17:  string | null;
  strMeasure18:  string | null;
  strMeasure19:  string | null;
  strMeasure20:  string | null;
  [index: string]: string | null;
  //strImageSource: null,
  
}

