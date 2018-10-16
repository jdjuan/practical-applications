```
<h1>Do you like cats?</h1>
<input type="text"
       (input)="checkAnswer($event.target.value)"><br><br>

<img *ngIf="showCat"
     src="https://thecatapi.com/api/images/get?format=src&type=gif&results_per_page">
<img *ngIf="!showCat"
     src="https://api.thedogapi.com/v1/images/search?format=src&mime_types=image/gif">
```

```
 showCat: boolean;

  checkAnswer(answer: string) {
    this.showCat = answer === 'yes';
  }
```
