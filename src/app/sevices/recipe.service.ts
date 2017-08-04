import {Injectable} from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Schnitzel',
      `A schnitzel is meat, usually thinned by pounding with a meat tenderizer,
        that is fried in some kind of oil or fat.`,
      'http://www.kulina.ru/images/docs/Image/znizel1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      2,
      'Hamburger',
      `A hamburger or burger is a sandwich consisting
        of one or more cooked patties of ground meat, usually
        beef, placed inside a sliced bread roll or bun.`,
      'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  public getRecipes() {
    return this.recipes.slice();
  }

  public getRecipe(id: number): Recipe {
    let recipe: Recipe;

    for (let rec of this.recipes) {
      if (id === rec.id) {
        recipe = rec;
        break;
      }
    }
    return recipe;
  }

  public addIngedientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
