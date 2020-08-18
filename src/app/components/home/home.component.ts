import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { map, debounceTime, takeUntil } from 'rxjs/operators';
import { Store, PaypalPaymentProcessor, StripePaymentProcessor } from '../dependency-inversion-principle/test';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    const store1 = new Store(new PaypalPaymentProcessor('Chinh'));
    const store2 = new Store(new StripePaymentProcessor('Hanh'));
    console.log('store2', store2);
    console.log('store1', store1);
    store1.purchaseBike(2);
    store1.purchaseHelmet(2);
    store2.purchaseBike(2);
    store2.purchaseHelmet(2);
  }

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
