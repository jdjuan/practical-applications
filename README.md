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
