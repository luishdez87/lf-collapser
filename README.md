# Collapser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

#Implementation

import the LfCollapserModule in your module

`import { LfCollapserModule } from 'lf-collapser';`

`@NgModule({
  declarations: [
    ...
  ],
  imports: [
    LfCollapserModule
  ]
})`

## Component implementation

Use the #toggler identifier on the toggler html element 

`<div class="card highlight-card card-small" #toggler >Toggler</div>`

and pass the toggler to the lf-collapser tag

`<lf-collapser [toggle]="toggler" > 
Content here!
</lf-collapser> `

## Demo

Clone the repo and check the demo for implementation example.
