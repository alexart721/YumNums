import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverRecipesComponent } from './discover-recipes/discover-recipes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  //need to make a path thats dependent soley upon 'what' parameter it is the user is trying to search by 
  { path: '', component: DiscoverRecipesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
