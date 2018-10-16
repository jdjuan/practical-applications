`<h1>Do you like cats?</h1>`

`<img src="https://thecatapi.com/api/images/get?format=src&type=gif&results_per_page">`

`<img src="https://api.thedogapi.com/v1/images/search?format=src&mime_types=image/gif">`

`showCat: boolean = false;`

`*ngIf="showCat"`

`*ngIf="!showCat"`

`<input type="text" (input)="checkAnswer($event.target.value)"><br><br>`

`checkAnswer(answer: string) { this.showCat = answer === 'yes'; }`
