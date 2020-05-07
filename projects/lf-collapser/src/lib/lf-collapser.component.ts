import { Component, OnInit, Input } from '@angular/core';
import { LfCollapserService } from './lf-collapser.service';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lf-collapser',
  templateUrl: 'lf-collapser.component.html',
  styles: [],
  animations: [
    trigger('collapse', [
      state('void', style({ transform: 'rotateX(-100deg)', transformOrigin: 'top', opacity: 0 })),
      transition(':enter, :leave', [
        animate(300)
      ])
    ])
  ]
})
export class LfCollapserComponent implements OnInit {

  @Input()
  toggle;

  constructor(
    public svc: LfCollapserService
  ) { }

  ngOnInit() {
  }

}
