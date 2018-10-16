import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showCat: boolean;

  checkAnswer(answer: string) {
    this.showCat = answer === 'yes';
  }
}
