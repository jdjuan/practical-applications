# Practical Applications with Angular

### [Exercise #1: Change the cat](https://github.com/jdjuan/practical-applications/tree/1)

### [Exercise #2: Do you like cats?](https://github.com/jdjuan/practical-applications/tree/2)

### [Exercise #3: Fortune teller](https://github.com/jdjuan/practical-applications/tree/3)

# Exercise 1

```html
<img src="https://www.ngcolombia.com/cat.jpg">
<img src="https://www.ngcolombia.com/cat2.gif">
<img src="https://www.ngcolombia.com/cat3.gif">
<img src="https://www.ngcolombia.com/cat4.gif">
<img src="https://www.ngcolombia.com/cat5.gif">
<img src="https://www.ngcolombia.com/cat6.gif">
```

`https://thecatapi.com/api/images/get?format=src&type=gif`

`https://thecatapi.com/api/images/get?format=src&type=gif&results_per_page=1`

`catUrl = 'https://thecatapi.com/api/images/get?format=src&type=gif&results_per_page=1';`

`<img [src]="catUrl">`

`<button (click)="change()">Change Cat</button><br><br>`

`baseUrl = 'https://thecatapi.com/api/images/get?format=src&type=gif&results_per_page=';`

`change() { this.catUrl = this.baseUrl + Math.round(Math.random() * 100);}`

# Exercise 2

`<h1>Do you like cats?</h1>`

`<img src="https://thecatapi.com/api/images/get?format=src&type=gif&results_per_page">`

`<img src="https://api.thedogapi.com/v1/images/search?format=src&mime_types=image/gif">`

`showCat: boolean = false;`

`*ngIf="showCat"`

`*ngIf="!showCat"`

`<input type="text" (input)="checkAnswer($event.target.value)"><br><br>`

`checkAnswer(answer: string) { this.showCat = answer === 'yes'; }`

# Exercise 3

`https://yesno.wtf/api`

`html, body { background-color: aquamarine; }`

`<h1>Ask me the future!</h1>`

`<input type="text" (keyup.enter)="ask()"> <br><br>`

`input { width: 80vw; }`

`ask() { }`

apiUrl = 'https://yesno.wtf/api';

`data$;`

`import { HttpClientModule } from '@angular/common/http';`

`constructor(private http: HttpClient) {}`

`ask() { this.data$ = this.http.get(this.apiUrl); }`

`<pre>{{ data$ | async | json }}</pre>`

`<img [src]="(data$ | async).image">`

`<img *ngIf="(data$ | async)?.image as gif" [src]="gif">`
