import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { map, debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  unsubscribe$ = new Subject<void>();
  phone;
  ngOnInit() {
    const queryParamPhone = document.getElementById('queryParamPhone');
    const keydownqueryParamPhone$ = fromEvent(queryParamPhone, 'input');
    keydownqueryParamPhone$
      .pipe(
        takeUntil(this.unsubscribe$),
        map((i: any) => i.currentTarget.value),
        debounceTime(500)
      )
      .subscribe(value => {
        console.log('value', value);
      });
  }

  onSearchChange(event) {
    console.log(event);
  }

  onChangeName(event) {
    console.log(event);
  }
}
