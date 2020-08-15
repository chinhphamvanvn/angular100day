import { Component, OnInit } from '@angular/core';
import { LicenseService } from './services/license.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  people = [
    {
      name: 'Nnamdi',
      licenseType: 'personal'
    },
    {
      name: 'John',
      licenseType: 'buisness'
    },
    // ...
  ];
  constructor(private licenseService: LicenseService) { }
  calculateLicenseFee(p) {
    return this.licenseService.calculateFee(p);
  }

}
