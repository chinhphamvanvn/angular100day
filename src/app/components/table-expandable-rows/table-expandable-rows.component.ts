import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table-expandable-rows',
  templateUrl: './table-expandable-rows.component.html',
  styleUrls: ['./table-expandable-rows.component.scss']
})
export class TableExpandableRowsComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  columnDefinitions = [
    {def: 'position', label: 'Position', hide: false, cell: (element: any) => `${element.position}`},
    {def: 'name', label: 'Name', hide: true, cell: (element: any) => `${element.name}`},
    {def: 'weight', label: 'Weight', hide: false, cell: (element: any) => `${element.weight}`},
    {def: 'symbol', label: 'Symbol', hide: true, cell: (element: any) => `${element.symbol}`},
    {def: 'provider', label: 'Provider', hide: false, cell: (element: any) => `${element.provider}`},
    {def: 'phone', label: 'Phone', hide: false, cell: (element: any) => `${element.phone}`},
    {def: 'address', label: 'Address', hide: false, cell: (element: any) => `${element.address}`},
    {def: 'status', label: 'status', hide: false, cell: (element: any) => `${element.status}`},
    {def: 'money', label: 'Money', hide: false, cell: (element: any) => `${element.money}`}
  ];


  getDisplayedColumns(): string[] {
    return this.columnDefinitions.filter(cd => cd.hide).map(cd => cd.def);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
   }
}

export interface UserData {
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

const ELEMENT_DATA = [
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
  {position: 11, name: 'ABCC', weight: 20.1797, symbol: 'Ne', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000},
  {position: 12, name: 'UAVS', weight: 20.1797, symbol: 'Ne', provider: 'May tinh Manh Cuong', phone: '0987654321', address: 'Phu Do, Nam Tu Liem, Ha Noi', status: 'Con no tien nha', money: 30000000}
];

/**
 * @title Basic use of `<table mat-table>`
 */
