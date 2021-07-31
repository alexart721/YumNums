import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FilterItemsService } from '../services/filter-items.service';
import { Ingredient } from '../infoObj';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  value: string;

  @Input() list: Ingredient[] = [];

  constructor(private router: Router, private service: FilterItemsService) { 
    this.value = "";
  }

  ngOnInit(): void {
    console.log(this.list);
    
  }

  onKey(event: any) {

    this.value = event.target.value;
    console.log(this.value);
    
    this.service.filterItems(this.value, this.list);
      
  }

}
