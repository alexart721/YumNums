import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import axios from 'axios';
import { map } from 'rxjs/operators';

import { Meals, Ingredient } from '../infoObj';

const options = {
  method: 'GET',
  url: 'https://themealdb.p.rapidapi.com/list.php',
  params: { i: 'list' },
  headers: {
    'x-rapidapi-key': '543c8e8f2cmshd8512899ea3d414p1d2174jsn55909a1fca06',
    'x-rapidapi-host': 'themealdb.p.rapidapi.com',
  }
};
const headers = new HttpHeaders({'x-rapidapi-key': '543c8e8f2cmshd8512899ea3d414p1d2174jsn55909a1fca06', 'x-rapidapi-host': 'themealdb.p.rapidapi.com'});

let params = new HttpParams();
params.append('i', 'list');

//{ headers: headers, params }

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUrl = 'https://www.themealdb.com/api/json/v2/9973533/';
  ingredientList: Ingredient[] = [];
  //meals : ngredientlist;

  constructor(private http: HttpClient) { }


  listIngredients(): Observable<Ingredient[]> {
    
    return this.http.get<Meals>(`${this.baseUrl}list.php?i=list`).pipe(map(data  => {
      console.log(data);

      for (let i:number = 0; i < data.meals.length; i++) {
        this.ingredientList.push(data.meals[i]);
      }
      //this.ingredientList = data.meals;
      return this.ingredientList; 
    }));
    

    /*axios.get(options).then(function (response) {
      console.log(response.data);
      
    }).catch(function (error) {
      console.log(error);
      
    });*/
    
  }

}


/*

const headerDict = {
  'x-rapidapi-key': '543c8e8f2cmshd8512899ea3d414p1d2174jsn55909a1fca06',
  'x-rapidapi-host': 'themealdb.p.rapidapi.com',
}
fetch
fetch('https://themealdb.p.rapidapi.com/', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => console.log(data));


axios-TypeScript
let user: User = null;
try {
  const { data } = await axios.get('/user?ID=12345');
  user = data.userDetails;
} catch (error) {
  if (axios.isAxiosError(error)) {
    handleAxiosError(error);
  } else {
    handleUnexpectedError(error);
  }
}

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
*/