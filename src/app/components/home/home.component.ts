import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { map, debounceTime, takeUntil } from 'rxjs/operators';
import { RandomServiceService } from './services/random-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Array<any>;
  totalRecords: number;
  page = 1;

  constructor(private randomServiceService: RandomServiceService) {
    this.data = new Array<any>();
  }

  unsubscribe$ = new Subject<void>();
  phone;
  ngOnInit() {
    this.randomServiceService.getData().subscribe(data => {
      this.data = data.results;
      this.totalRecords = data.results.length;
    });


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
