import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from '../sevices/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSubscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingridients: Ingredient[]) => {
          this.ingredients = ingridients});
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }
}
