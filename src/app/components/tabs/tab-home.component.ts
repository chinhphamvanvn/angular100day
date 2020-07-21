import { Component } from '@angular/core';

@Component({
    selector: 'app-tap-home',
    template: `
        <app-tab-group [(activeIndex)]="currentIndex">
            <app-tab-panel title="First tab">First tab content</app-tab-panel>
            <app-tab-panel title="Second tab">Second tab content</app-tab-panel>
            <app-tab-panel title="Three tab">Three tab content</app-tab-panel>
        </app-tab-group>

        <app-tab-bs-group [(activeIndex)]="currentIndex">
            <app-tab-panel title="First tab">First tab content</app-tab-panel>
            <app-tab-panel title="Second tab">Second tab content</app-tab-panel>
            <app-tab-panel title="Three tab">Three tab content</app-tab-panel>
        </app-tab-bs-group>
    `
})

export class TabHomeComponent {
    currentIndex = 0;
}