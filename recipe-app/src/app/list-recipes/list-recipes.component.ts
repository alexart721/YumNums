import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Ingredient } from '../infoObj';
import { Recipe } from '../recipeObj';
import { FilterApiService } from '../services/filter-api.service';
import { ListItemsService } from '../services/list-items.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  //list?: Ingredient[] = [];
  //not sure if i need to recieve information through my @input or what
  @Input() list: Ingredient[];
  
  recipeOptions: Recipe[] = [];
  ingredientsNeeded: Ingredient[] = [];
  ingredient?: Ingredient;

  constructor(
    private location: Location,
    private router: Router, 
    private route: ActivatedRoute,
    private filterApi: FilterApiService,
    private listItems: ListItemsService
    ) { }
  
  ngOnInit(): void {
    console.log(JSON.stringify(this.list, null, 2));

    this.searchRecipes(this.list);

    this.listItems.recipeList$
  }

  //trying to figure out the best way to access the info that was gathered inside the discover-recipes-component
  searchRecipes(list: any): void {
    console.log("Inside child component", this.list);
    
    if (this.list) {
      this.filterApi.filterOptions(this.list).subscribe(recipeOptions => {
        this.recipeOptions = recipeOptions;
        console.log(this.recipeOptions);
      });
    }
    
    
  }

  removeRecipe(item: Recipe): void {
    this.listItems.removeRecipeFromList(item);
  }

  viewRecipe(item: Recipe): void {
    this.listItems.removeRecipeFromList(item);
  }
  

}
