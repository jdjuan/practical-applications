```css
html,
body {
  background-color: aquamarine;
}
```

```html
https://yesno.wtf/api
```

```html
<h1>Ask me the future!</h1>

<input type="text"
       (keyup.enter)="ask()">
<br><br>
<img *ngIf="(data$ | async)?.image as gif"
     [src]="gif">
```

```css
input {
  width: 80vw;
}
```

```typescript
apiUrl = 'https://yesno.wtf/api';
  data$;

  constructor(private http: HttpClient) {}

  ask() {
    this.data$ = this.http.get(this.apiUrl);
  }
```
