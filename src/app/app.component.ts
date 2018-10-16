import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  baseUrl = 'https://thecatapi.com/api/images/get?format=src&type=gif&results_per_page=';
  catUrl = 'https://thecatapi.com/api/images/get?format=src&type=gif&results_per_page=1';

  change() {
    this.catUrl = this.baseUrl + Math.round(Math.random() * 100);
  }
}
