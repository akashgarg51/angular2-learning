import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <h1>Inline Template </h1>
      <app-other></app-other>
      <app-another>
           <div>
   <h1>Hello!</h1>
<p>World!</p>
</div>
</app-another>
      <app-another>
    <p>Something else</p>
</app-another>
     `,
    styles: [`
   h1 {
    color: red;    
}
`]
})
export class AppComponent {
    title = 'app works!';
}
