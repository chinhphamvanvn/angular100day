import { Component } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
    selector: 'app-tab-bs-group',
    template: `
    <ul class="nav">
        <li class="nav-item" *ngFor="let tab of tabPanelList; let idx = index"
        [class.active]="idx === activeIndex"
                (click)="activeIndexChange.emit(idx)">
                {{ tab.title }}
                <button (click)="removeTab(tab)">x</button>
    </ul>

    <div class="tab-body" *ngIf="tabPanelList.length; else noTabs">
        <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-container>
    </div>

    <ng-template #noTabs>
        No more tabs.
    </ng-template>
    `,

    providers: [
        {
            provide: TabGroupComponent,
            useExisting: TabBsGroupComponent
        }
    ]
})
export class TabBsGroupComponent extends TabGroupComponent { }
