import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from './recipe.service';
import {Recipe} from '../models/recipe.model';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';

@Injectable()
export class DataStorageService {
  private endpoint = 'https://ng-recipe-book-865ea.firebaseio.com/';

  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();
    return this
      .http
      .put(
        this.endpoint + 'recipes.json?auth=' + token,
        this.recipeService.getRecipes()
      );
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this
      .http
      .get(
        this.endpoint + 'recipes.json?auth=' + token
      )
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
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
