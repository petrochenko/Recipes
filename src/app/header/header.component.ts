import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {DataStorageService} from '../sevices/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  constructor(private dataSorageService: DataStorageService) {
  }

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
}
