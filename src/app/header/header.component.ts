import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  })

export class HeaderComponent {
  @Output() viewSelected = new EventEmitter<string>();

  constructor() {
  }

  onSelectView(viewName: string) {
    this.viewSelected.emit(viewName);
  }
}
