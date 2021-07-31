import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../infoObj';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  private list: Ingredient[] = [];
  list$ = new BehaviorSubject(this.list);

  constructor() { }

  addItemToList(item: Ingredient): void {
    console.log(item);
    
    this.list.push(item);
    this.list$.next(this.list);
    console.log(this.list, "add 2 list");
    
  }

  removeItemFromList(item: Ingredient): void {
    this.list = this.list.filter((element) => element !== item);
    this.list$.next(this.list);
  }

}
