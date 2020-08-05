import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, merge } from 'rxjs';
@Component({
  selector: 'app-table-expandable-rows',
  templateUrl: './table-expandable-rows.component.html',
  styleUrls: ['./table-expandable-rows.component.scss']
})
export class TableExpandableRowsComponent implements OnInit, AfterViewInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'provider', 'phone', 'address', 'status', 'money'];

  cbValues;

  /**
   * Control column ordering and which columns are displayed.
   */
  dataSource = ELEMENT_DATA;

  form: FormGroup = new FormGroup({
    position: new FormControl(false),
    name: new FormControl(true),
    weight: new FormControl(false),
    symbol: new FormControl(true),
    provider: new FormControl(false),
    phone: new FormControl(false),
    address: new FormControl(false),
    status: new FormControl(false),
    money: new FormControl(false)
  });

  position = this.form.get('position');
  name = this.form.get('name');
  weight = this.form.get('weight');
  symbol = this.form.get('symbol');
  provider = this.form.get('provider');
  phone = this.form.get('phone');
  address = this.form.get('address');
  status = this.form.get('status');
  money = this.form.get('money');

  columnDefinitions = [
    {def: 'position', label: 'Position', hide: false},
    {def: 'name', label: 'Name', hide: true},
    {def: 'weight', label: 'Weight', hide: false},
    {def: 'symbol', label: 'Symbol', hide: true},
    {def: 'provider', label: 'Provider', hide: false},
    {def: 'phone', label: 'Phone', hide: false},
    {def: 'address', label: 'Address', hide: false},
    {def: 'status', label: 'status', hide: false},
    {def: 'money', label: 'Money', hide: false}
  ];


  getDisplayedColumns(): string[] {
    return this.columnDefinitions.filter(cd => cd.hide).map(cd => cd.def);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    const o1: Observable<boolean> = this.position.valueChanges;
    const o2: Observable<boolean> = this.name.valueChanges;
    const o3: Observable<boolean> = this.weight.valueChanges;
    const o4: Observable<boolean> = this.symbol.valueChanges;
    const o5: Observable<boolean> = this.provider.valueChanges;
    const o6: Observable<boolean> = this.phone.valueChanges;
    const o7: Observable<boolean> = this.address.valueChanges;
    const o8: Observable<boolean> = this.status.valueChanges;
    const o9: Observable<boolean> = this.money.valueChanges;

    merge(o1, o2, o3, o4, o5, o6, o7, o8, o9).subscribe( v => {
    this.columnDefinitions[0].hide = this.position.value;
    this.columnDefinitions[1].hide = this.name.value;
    this.columnDefinitions[2].hide = this.weight.value;
    this.columnDefinitions[3].hide = this.symbol.value;
    this.columnDefinitions[4].hide = this.provider.value;
    this.columnDefinitions[5].hide = this.phone.value;
    this.columnDefinitions[6].hide = this.address.value;
    this.columnDefinitions[7].hide = this.status.value;
    this.columnDefinitions[8].hide = this.money.value;
     });
   }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  provider: string;
  phone: string;
  address: string;
  status: string;
  money: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', provider: 'May tinh Manh Cuong',phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
];

/**
 * @title Basic use of `<table mat-table>`
 */
