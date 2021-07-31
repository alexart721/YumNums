import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterItemsService } from '../services/filter-items.service';
import { ApiService } from '../services/listApi.service';
import { Ingredient } from '../infoObj';
import { ListItemsService } from '../services/list-items.service';

@Component({
  selector: 'app-discover-recipes',
  templateUrl: './discover-recipes.component.html',
  styleUrls: ['./discover-recipes.component.css']
})
export class DiscoverRecipesComponent implements OnInit, OnDestroy {
  ingredient?: Ingredient;
  ingredientList: Ingredient[] = [];
  filteredIngredients: Ingredient[] = [];
  list: Ingredient[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute, 
    private filteringItems: FilterItemsService,
    private listItems: ListItemsService
  ) {}

  ngOnInit(): void {
    this.getIngredients();

    this.filteringItems.current$
      .subscribe((data: Ingredient[]) => {
        this.filteredIngredients = data;
      });
    this.route.params
      .subscribe(params => {
        const nameSearch: string = params['strIngredient'];
        this.filteringItems.filterItems(nameSearch, this.list);
      });
    
    this.listItems.list$
    .subscribe((data: Ingredient[]) => {
      this.list = data;
    })
  }

  getIngredients(): void {
    this.apiService.listIngredients().subscribe(ingredientList => {
      this.filteredIngredients = ingredientList;
      this.ingredientList = ingredientList, 
      console.log(this.ingredientList);
    });
  }

  addItem(item: Ingredient): void {
    this.listItems.addItemToList(item);
  }

  removeItem(item: Ingredient): void {
    this.listItems.removeItemFromList(item);
  }


  ngOnDestroy() {
    this.filteringItems.current$.unsubscribe();  
  }
}