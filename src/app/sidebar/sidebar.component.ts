import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('showLeftPanel', [
      state('small', style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 })),
      state('large', style({ opacity: 1, transform: 'translateX(0%)', offset: 0 })),
      transition('small => large', animate('250ms ease-in')),
    ]),
    trigger('showRightPanel', [
      state('small', style({ opacity: 0, transform: 'translateX(100%)', offset: 0 })),
      state('large', style({ opacity: 1, transform: 'translateX(0%)', offset: 0 })),
      transition('small => large', animate('250ms ease-in')),
    ]),
  ]
})
export class SidebarComponent implements OnInit {

  @Input() hidden: boolean = true;
  
  private hiddenObservable: BehaviorSubject<boolean>;

  constructor() { }

  ngOnInit() {
    this.hiddenObservable = new BehaviorSubject<boolean>(this.hidden);
    this.hiddenObservable.debounceTime(1).subscribe(hidden => this.hidden = hidden);
  }

  toggle(which: string) {
    this.hiddenObservable.next(!this.hidden);
  }
}
