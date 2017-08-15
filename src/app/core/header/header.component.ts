import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {DataStorageService} from '../../sevices/data-storage.service';
import {AuthService} from '../../sevices/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  constructor(
    private dataSorageService: DataStorageService,
    private authService: AuthService) {}

  onSaveData() {
    this
      .dataSorageService
      .storeRecipes()
      .subscribe((response: Response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        });
  }

  onFetchData() {
    this
      .dataSorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
