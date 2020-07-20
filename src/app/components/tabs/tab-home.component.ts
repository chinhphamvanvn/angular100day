import { Component } from "@angular/core";

@Component({
    selector: 'app-tap-home',
    template: `
        <app-tab-group [(activeIndex)]="currentIndex">
            <app-tab-panel title="First tab">First tab content</app-tab-panel>
            <app-tab-panel title="Second tab">Second tab content</app-tab-panel>
        </app-tab-group>
    `
})

export class TabHomeComponent {
    currentIndex = 0;
}