import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCTKIIWE8OYecvVkjGnMw1TzgTZMwd5Ixk',
      authDomain: 'ng-recipe-book-865ea.firebaseapp.com'
    });
  }
}
