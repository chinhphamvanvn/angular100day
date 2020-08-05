import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, HostListener } from '@angular/core';

export enum KEY_CODE {
  ENTER = 13
}

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.scss']
})

export class TemplateReferenceComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) { }
  // Reference firstNameInput variable inside Component
  @ViewChild('firstNameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('email', { static: false }) emailVariable: ElementRef<HTMLInputElement>;
  fullName: string;

  ctx = { fullName: '' };

  ngOnInit() {
  }

  ngAfterViewInit() {
    // ElementRef: { nativeElement: <input> }
    console.log(this.emailVariable);

    // Access the input object or DOM node
    console.dir(this.emailVariable.nativeElement);

    // Manipulate via Renderer2
    this.renderer.setStyle(this.emailVariable.nativeElement, 'background', '#d515a0');
  }

  show(lastName: HTMLInputElement) {
    this.fullName = this.nameInputRef.nativeElement.value + ' ' + lastName.value;
    this.ctx.fullName = this.fullName;
  }

  showEmail() {
    alert(this.emailVariable.nativeElement.value);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.keyCode === KEY_CODE.ENTER) {
      this.showEmail();
    }
  }

}
