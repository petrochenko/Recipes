import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';

import {RecipeService} from './sevices/recipe.service';
import {ShoppingListService} from './sevices/shopping-list.service';
import {DataStorageService} from './sevices/data-storage.service';
import {AuthService} from './sevices/auth.service';
import {AuthGuardService} from './sevices/auth-guard.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    DataStorageService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
