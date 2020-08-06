import { Component, OnInit } from '@angular/core';
import { ApiSmartService } from 'src/app/services/apismart.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  query = {
    filter: '',
    gridWidth: 1000,
    store_id: ''
  };
  constructor(
    private apiSmart: ApiSmartService
  ) {
    console.log('hello');
   }

  ngOnInit() {
    this.getSupplierPage();
  }

  getSupplierPage() {
    const offset = 0;
    const pageSize = 10;
    const opts = {
      params: new HttpParams({
        fromString: `filter=${this.query.filter}&gridWidth=${this.query.gridWidth}&offSet=${offset}&pageSize=${pageSize}`
      })
    };
    this.apiSmart.getSupplierPage(opts.params.toString()).subscribe(results => {
      if (results.status === 'success') {
        console.log('result', results);
      }
    });
  }
}
