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

  lists: any;
  cols: any[];
  objectAction: any;
  public agGridFn = AgGridFn;
  columnDefs;

  constructor(
    private apiSmart: ApiSmartService
  ) { }

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
        this.lists = results.data.dataList;
        if (offset === 0) {
          this.cols = results.data.gridflexs;
          this.cols.forEach(column => {
            if (column.columnField === 'actions') {
              this.objectAction = column;
            }
          });
        }
        this.init();
      }
    });
  }

  init() {
    this.columnDefs = [
      ...this.agGridFn(this.cols),
      {
        headerName: 'Chức năng',
        field: 'button',
        filter: '',
        pinned: this.objectAction ? this.objectAction.pinned : 'right',
        width: this.objectAction ? this.objectAction.columnWidth : 100,
        cellRenderer: 'buttonRenderer1',
        cellClass: this.objectAction ? this.objectAction.cellClass : ['border-right'],
        cellRendererParams: params => {
          return {
            buttons: [
              {
                onClick: this.EditSupplier.bind(this),
                label: 'Sửa',
                icon: 'fa fa-edit',
                class: 'btn-primary mr5',
              },
              {
                onClick: this.DeleteSupplier.bind(this),
                label: 'Xóa',
                icon: 'fa fa-trash',
                class: 'btn-danger',
              },
            ]
          };
        },
      },
    ];
  }

  EditSupplier(e) {}

  DeleteSupplier(e) {}
}


export function AgGridFn(lists) {
  const arrAgGrids = [];
  for (const value of lists) {
    let row = {};
    if (value.isStatusLable) {
      row = {
        headerName: value.columnCaption,
        field: value.columnField,
        cellClass: value.cellClass,
        filter: value.isFilter ? 'agTextColumnFilter' : '',
        sortable: true,
        width: value.columnWidth,
        cellRenderer: params => {
          const a = document.createElement('div');
          a.innerHTML = params.value;
          return a;
        },
        hide: value.isHide ? true : false,
        pinned: value.pinned,
        headerTooltip: value.columnCaption,
        tooltipField: value.columnField
      };
    } else {
      if (value.fieldType === 'image') {
        row = {
          headerName: value.columnCaption,
          field: value.columnField,
          // cellClass: value.cellClass,
          filter: value.isFilter ? 'agTextColumnFilter' : '',
          sortable: true,
          width: value.columnWidth,
          hide: value.isHide ? true : false,
          pinned: value.pinned,
          cellRenderer: 'avatarRenderer',
          headerTooltip: value.columnCaption,
          tooltipField: value.columnField,
          cellClass: ['text-center', 'text-right', 'border-right', 'd-flex', 'align-items-center', 'justify-content-center'],
          // valueFormatter: value.fieldType == 'decimal' ? ""
        };
      } else if (value.fieldType === 'check') {
        row = {
          headerName: value.columnCaption,
          field: value.columnField,
          cellClass: value.cellClass,
          filter: value.isFilter ? 'agTextColumnFilter' : '',
          sortable: true,
          width: value.columnWidth,
          cellRenderer: params => {
            return ` <span class="custom-control custom-checkbox float-left" style="margin-top: 7%;">
                      <input type="checkbox" ${params.value ? 'checked' : ''}
                        ${params.value ? '' : 'disabled'} class="custom-control-input"  >
                      <label class="custom-control-label"></label>
                    </span>`;
          },
          hide: value.isHide ? true : false,
          pinned: value.pinned,
          headerTooltip: value.columnCaption,
          // tooltipField: value.columnField
          // valueFormatter: value.fieldType == 'decimal' ? ""
        };
      } else {
        row = {
          headerName: value.columnCaption,
          field: value.columnField,
          cellClass: value.cellClass,
          cellClassRules: value.conditionClass,
          filter: value.isFilter ? 'agTextColumnFilter' : '',
          sortable: true,
          width: value.columnWidth,
          cellRenderer: value.isMasterDetail ? 'agGroupCellRenderer' : '',
          hide: value.isHide ? true : false,
          pinned: value.pinned,
          tooltipField: value.columnField,
          headerTooltip: value.columnCaption,
          valueFormatter: value.fieldType === 'decimal' ? 'x.toLocaleString()' : ''
        };
      }
    }

    arrAgGrids.push(row);
  }
  return arrAgGrids;
}
