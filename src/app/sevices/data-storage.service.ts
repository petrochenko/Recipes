import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import 'rxjs/add/operator/map';

import {RecipeService} from './recipe.service';
import {Recipe} from '../models/recipe.model';
import {AuthService} from './auth.service';

@Injectable()
export class DataStorageService {
  private endpoint = 'https://ng-recipe-book-865ea.firebaseio.com/';

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {
  }

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer dfsfsfdsf')
    // return this
    //  .httpClient
    //  .put(
    //    this.endpoint + 'recipes.json',
    //    this.recipeService.getRecipes(),
    //    {
    //      observe: 'body',
    //      params: new HttpParams().set('auth', token)
    //      // headers: headers
    //    }
    //  );

    const req = new HttpRequest(
      'PUT',
      this.endpoint + 'recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true,
      }
      );
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();
    // return this
    //  .httpClient
    //  .get<Recipe[]>(
    //    this.endpoint + 'recipes.json?auth=' + token
    //  )
    return this
      .httpClient
      .get<Recipe[]>(
        this.endpoint + 'recipes.json',
        {
          observe: 'body',
          responseType: 'json'
        }
      )
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
