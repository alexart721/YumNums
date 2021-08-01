import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../infoObj';
import { Recipe } from '../recipeObj';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  private ingredientslist: Ingredient[] = [];
  ingredientslist$ = new BehaviorSubject(this.ingredientslist);

  private recipeList: Recipe[] = [];
  recipeList$ = new BehaviorSubject(this.recipeList);

  constructor() { }

  addItemToList(item: Ingredient): void {  
    this.ingredientslist.push(item);
    this.ingredientslist$.next(this.ingredientslist);
  }

  removeItemFromList(item: Ingredient): void {
    this.ingredientslist = this.ingredientslist.filter((element) => element !== item);
    this.ingredientslist$.next(this.ingredientslist);
  }



  removeRecipeFromList(item: Recipe): void {
    this.recipeList = this.recipeList.filter((element) => element !== item);
    this.recipeList$.next(this.recipeList);
  }
}
