import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-global-footer',
    templateUrl: './global-footer.component.html',
    styleUrls: ['./global-footer.component.less']
})
export class GlobalFooterComponent {
    @Input() links: Array<object>;
    @Input() copyright: string;
    constructor() {}
}
