import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  apiUrl = 'https://yesno.wtf/api';
  data$;

  constructor(private http: HttpClient) {}

  ask() {
    this.data$ = this.http.get(this.apiUrl);
  }
}
