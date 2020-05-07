import { NgModule } from '@angular/core';
import { LfCollapserComponent } from './lf-collapser.component';
import { CommonModule } from '@angular/common';
import { ToggleDirective } from './toggle.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LfCollapserComponent,
    ToggleDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [LfCollapserComponent, ToggleDirective]
})
export class LfCollapserModule { }
