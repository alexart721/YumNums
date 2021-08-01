import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipeObj';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  recipeInfo: Recipe | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
