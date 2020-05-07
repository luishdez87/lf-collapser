import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LfCollapserModule } from 'lf-collapser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LfCollapserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
