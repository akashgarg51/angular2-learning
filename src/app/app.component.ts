import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <h1>Root Component </h1>

<app-lifecycle *ngIf="!delete" [bindable]="boundValue">
    <p>{{test}}</p>
</app-lifecycle>
<button (click)="delete = true">Click to Delete</button>
<button (click)="test = 'Changed value'">Click to Change Content</button>
<button (click)="boundValue= 2000">Click to Change Binding</button>
<br>

      <app-databinding></app-databinding>


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
    delete = false;
    boundValue = 1000;
    title = 'app works!';
    test = 'Starting Value';
}
