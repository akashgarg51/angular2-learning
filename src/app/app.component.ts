import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Inline Template </h1>
      <app-other></app-other>
     `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
