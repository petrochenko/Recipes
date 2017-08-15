import {NgModule} from '@angular/core';

import {AppRoutingModule} from '../app-routing.module';
import {SharedModule} from '../shared/shared.module';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';

import {RecipeService} from '../sevices/recipe.service';
import {ShoppingListService} from '../sevices/shopping-list.service';
import {DataStorageService} from '../sevices/data-storage.service';
import {AuthService} from '../sevices/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    DataStorageService,
    AuthService,
  ],
})

export class CoreModule {
}
