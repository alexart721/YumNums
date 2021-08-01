import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../infoObj';
import { ApiService } from './listApi.service';

@Injectable({
  providedIn: 'root'
})
export class FilterItemsService {
  //ingredientList: Ingredient[] = [];
  private _items: Ingredient[] = [];
  public current$ = new BehaviorSubject<Ingredient[]>([]);

  constructor(private listApi: ApiService) { }

  filterItems(query: string, list: Ingredient[]) {
    console.log(list, "inside filtering items service");
    return this.current$.next(list.filter((item) =>  {
      
      item.strIngredient.toLowerCase().includes(query.toLowerCase())
    }));
  }

  refetchIngredients() {
    this.listApi.listIngredients()
      .subscribe((item) => {
        this._items = item;
        this.current$.next(item);
      });
  }
}
