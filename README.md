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
