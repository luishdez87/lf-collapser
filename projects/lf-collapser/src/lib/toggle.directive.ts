import {Directive, Input} from '@angular/core';
import { LfCollapserService } from './lf-collapser.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[toggle]',
})
export class ToggleDirective {

  constructor(
    private svc: LfCollapserService
  ) { }

  @Input()
  set toggle(el: HTMLBaseElement) {

    el.addEventListener('click', () => {
      this.svc.opened = !this.svc.opened;
    });
  }
}
