import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Meals, Ingredient } from '../infoObj';
import { Recipe } from '../recipeObj';

@Injectable({
  providedIn: 'root'
})
export class FilterApiService {
  baseUrl = 'https://www.themealdb.com/api/json/v2/9973533/';
  menu: Recipe[] = [];

  constructor(private http: HttpClient) { }

  filterOptions(list: Ingredient[]): Observable<Recipe[]> {
    let params;
    let paramsArr = [];
    for (let i:number = 0; i < list.length; i++) {
      paramsArr.push(list[i].strIngredient.toLowerCase())
      console.log(paramsArr, "Inside 1st for-loop");
    }
    for (let i:number = 0; i < paramsArr.length; i++) {
      paramsArr[i] = paramsArr[i].replace(' ', '_');
      params = `${paramsArr[i]}`
      
    }
    console.log(params, "outside 2nd for-loop");
    //Whats going to be done here is I am going to connect this to my 'list-recipes' component so I can use the params set, to search for recipes 
    
    return this.http.get<Meals>(`${this.baseUrl}filter.php?i=${params}`).pipe(map(data  => {
      console.log(data);

      //this.menu = data;
      //this.ingredientList = data.meals;
      return this.menu; 
    }));
    
  }


}
