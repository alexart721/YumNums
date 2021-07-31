import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DiscoverRecipesComponent } from './discover-recipes/discover-recipes.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomepageComponent,
    DiscoverRecipesComponent,
    ListRecipesComponent,
    RecipePageComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
