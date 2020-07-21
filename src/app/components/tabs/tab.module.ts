import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabRoutingModule } from './tab-routing.module';
import { TabGroupComponent } from './tab-group.component';
import { TabPanelComponent } from './tab-panel.component';
import { TabHomeComponent } from './tab-home.component';
import { TabBsGroupComponent } from './tab-bs-group.component';

@NgModule({
    declarations: [TabGroupComponent, TabPanelComponent, TabHomeComponent, TabBsGroupComponent],
    imports: [
        CommonModule,
        TabRoutingModule
    ]
})

export class TabModule { }
