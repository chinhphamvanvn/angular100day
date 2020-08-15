import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { LicenseService } from './services/license.service';



@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  providers: [
    LicenseService
  ]
})
export class PeopleModule { }
