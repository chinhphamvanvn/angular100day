import { Component, Input, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
    selector: 'app-tab-panel',
    template: `
        <ng-template>
            <ng-content></ng-content>
        </ng-template>
    `
})

export class TabPanelComponent implements OnInit {
    @Input() title: string;
    @ViewChild(TemplateRef, {static: true}) panelBody: TemplateRef<unknown>;

    constructor(private tabGroup: TabGroupComponent) {}

    ngOnInit() {
        // moi lan khoi tao 1 component tab panel thi se goi den ham addTab 1 lan
        this.tabGroup.addTab(this);
    }
}
