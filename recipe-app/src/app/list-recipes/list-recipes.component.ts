import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../infoObj';
import { FilterApiService } from '../services/filter-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  @Input() list: Ingredient[] = [];

  constructor(private router: Router, private service: FilterItemsService) { }

  ngOnInit(): void {
  }

}
