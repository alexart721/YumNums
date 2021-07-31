import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Meals, Ingredient, Recipe, Menu } from '../infoObj';


@Injectable({
  providedIn: 'root'
})
export class FilterApiService {
  baseUrl = 'https://www.themealdb.com/api/json/v2/9973533/';
  menu: Recipe[] = [];

  constructor(private http: HttpClient) { }

  filterOptions(): Observable<Recipe[]> {
    let params;
    
    
    return this.http.get<Meals>(`${this.baseUrl}filter.php?i=${params}`).pipe(map(data  => {
      console.log(data);

      this.menu = data;
      //this.ingredientList = data.meals;
      return this.menu; 
    }));
    
  }


}
