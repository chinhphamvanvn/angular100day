import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.scss']
})
export class TemplateReferenceComponent implements OnInit {

  constructor() { }
  // Reference firstNameInput variable inside Component
 @ViewChild('firstNameInput', {static: false}) nameInputRef: ElementRef;
  fullName: string;

   ctx = {fullName: ''};

  ngOnInit() {
  }

   show(lastName: HTMLInputElement) {
      this.fullName = this.nameInputRef.nativeElement.value + ' ' + lastName.value;
      this.ctx.fullName = this.fullName;
   }

}
